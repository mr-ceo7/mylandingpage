#include <WiFi.h>
#include <SPI.h>
#include <MFRC522.h>
#include <LittleFS.h>
#include <ArduinoJson.h>

// --- Hardware Setup (Verified Pin Mapping) ---
#define RST_PIN 17   // GP17 (Physical Pin 22)
#define SS_PIN 15    // GP15 (Physical Pin 20)
#define MISO_PIN 16  // GP16 (Physical Pin 21)
#define MOSI_PIN 19  // GP19 (Physical Pin 25)
#define SCK_PIN 18   // GP18 (Physical Pin 24)

// Access Point Credentials
const char* ssid = "PicoW_Attendance";
const char* password = "pico_password";

MFRC522 mfrc522(SS_PIN, RST_PIN);
WiFiServer server(80);

const char* studentFile = "/students.json";
String latestScannedUID = "";

bool cutoffEnabled = false;
int cutoffHour = 8;
int cutoffMinute = 30;

unsigned long syncEpoch = 0;
unsigned long syncMillis = 0;

void loadConfig() {
  if (!LittleFS.exists("/config.json")) return;
  File f = LittleFS.open("/config.json", "r");
  if (f) {
    JsonDocument doc;
    deserializeJson(doc, f);
    cutoffEnabled = doc["cutoff_enabled"] | false;
    cutoffHour = doc["cutoff_hour"] | 8;
    cutoffMinute = doc["cutoff_minute"] | 30;
    f.close();
  }
}

void saveConfig() {
  File f = LittleFS.open("/config.json", "w");
  if (f) {
    JsonDocument doc;
    doc["cutoff_enabled"] = cutoffEnabled;
    doc["cutoff_hour"] = cutoffHour;
    doc["cutoff_minute"] = cutoffMinute;
    serializeJson(doc, f);
    f.close();
  }
}

unsigned long getCurrentEpoch() {
  if (syncEpoch == 0) return 0;
  return syncEpoch + (millis() - syncMillis) / 1000;
}

String formatTime(int h, int m) {
  int h12 = h % 12;
  if (h12 == 0) h12 = 12;
  return String(h12 < 10 ? "0" : "") + String(h12) + ":" + String(m < 10 ? "0" : "") + String(m) + (h >= 12 ? " PM" : " AM");
}

void loadStudents(JsonDocument& doc) {
  File f = LittleFS.open(studentFile, "r");
  if (f) {
    deserializeJson(doc, f);
    f.close();
  } else {
    doc.to<JsonArray>();
  }
}

void saveStudents(JsonDocument& doc) {
  File f = LittleFS.open(studentFile, "w");
  if (f) {
    serializeJson(doc, f);
    f.close();
  }
}

int getPresentCount() {
  JsonDocument doc;
  loadStudents(doc);
  JsonArray arr = doc.as<JsonArray>();
  int presentCount = 0;
  for (JsonObject student : arr) {
    String ls = student["last_seen"].as<String>();
    if (ls.startsWith("Present")) {
      presentCount++;
    }
  }
  return presentCount;
}

void sendPresentCount() {
  int count = getPresentCount();
  Serial1.print("<COUNT:");
  Serial1.print(count);
  Serial1.println(">");
  Serial.print("Sent count to Uno: ");
  Serial.println(count);
}

// Helper to URL-decode strings (converts '+' to space and '%XX' to character)
String urlDecode(String str) {
  String decoded = "";
  for (unsigned int i = 0; i < str.length(); i++) {
    if (str[i] == '+') {
      decoded += ' ';
    } else if (str[i] == '%' && i + 2 < str.length()) {
      char c1 = str[i + 1];
      char c2 = str[i + 2];
      byte b = 0;
      if (c1 >= '0' && c1 <= '9') b += (c1 - '0') * 16;
      else if (c1 >= 'A' && c1 <= 'F') b += (c1 - 'A' + 10) * 16;
      else if (c1 >= 'a' && c1 <= 'f') b += (c1 - 'a' + 10) * 16;
      
      if (c2 >= '0' && c2 <= '9') b += (c2 - '0');
      else if (c2 >= 'A' && c2 <= 'F') b += (c2 - 'A' + 10);
      else if (c2 >= 'a' && c2 <= 'f') b += (c2 - 'a' + 10);
      
      decoded += (char)b;
      i += 2;
    } else {
      decoded += str[i];
    }
  }
  return decoded;
}

// Helper to extract a query/POST parameter from a URL-encoded string
String getQueryParam(const String& body, const String& param) {
  String search = param + "=";
  int index = body.indexOf(search);
  if (index == -1) return "";
  int valStart = index + search.length();
  int valEnd = body.indexOf('&', valStart);
  if (valEnd == -1) {
    return body.substring(valStart);
  }
  return body.substring(valStart, valEnd);
}

void handleClient(WiFiClient client) {
  String reqLine = client.readStringUntil('\r');
  if (client.read() == '\n'); // consume '\n'

  int contentLength = 0;

  while (client.connected()) {
    String line = client.readStringUntil('\r');
    if (client.read() == '\n'); // consume '\n'
    if (line.length() == 0 || line == "\n") {
      break;
    }
    String lineLower = line;
    lineLower.toLowerCase();
    if (lineLower.indexOf("content-length:") != -1) {
      int colon = line.indexOf(":");
      contentLength = line.substring(colon + 1).toInt();
    }
  }

  String body = "";
  if (contentLength > 0) {
    unsigned long startWait = millis();
    while (client.available() < contentLength && (millis() - startWait < 1000)) {
      delay(10);
    }
    for (int i = 0; i < contentLength; i++) {
      if (client.available()) {
        body += (char)client.read();
      }
    }
  }

  if (reqLine.indexOf("POST /register") != -1) {
    String name = getQueryParam(body, "name");
    String uid = getQueryParam(body, "uid");
    name = urlDecode(name);
    uid = urlDecode(uid);
    uid.trim();

    if (name.length() > 0 && uid.length() > 0) {
      JsonDocument doc;
      loadStudents(doc);
      JsonArray arr = doc.as<JsonArray>();
      bool exists = false;
      for (JsonObject student : arr) {
        if (student["uid"].as<String>() == uid) {
          student["name"] = name;
          exists = true;
          break;
        }
      }
      if (!exists) {
        JsonObject newStudent = arr.add<JsonObject>();
        newStudent["uid"] = uid;
        newStudent["name"] = name;
        newStudent["last_seen"] = "Never";
      }
      saveStudents(doc);
      latestScannedUID = "";
      sendPresentCount();
    }
    client.println("HTTP/1.1 303 See Other");
    client.println("Location: /");
    client.println();
    return;
  }

  if (reqLine.indexOf("POST /sync_time") != -1) {
    String tStr = getQueryParam(body, "t");
    if (tStr.length() > 0) {
      unsigned long ts = tStr.toInt();
      if (ts > 0) {
        syncEpoch = ts;
        syncMillis = millis();
        Serial1.print("<TIME:");
        Serial1.print(syncEpoch);
        Serial1.println(">");
        Serial.println("Synced time from browser: " + String(syncEpoch));
      }
    }
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/plain");
    client.println("Content-Length: 2");
    client.println();
    client.print("OK");
    return;
  }

  if (reqLine.indexOf("POST /set_cutoff") != -1) {
    cutoffEnabled = (getQueryParam(body, "enabled") == "1");
    String timeVal = getQueryParam(body, "time");
    timeVal = urlDecode(timeVal);
    int colon = timeVal.indexOf(":");
    if (colon != -1) {
      cutoffHour = timeVal.substring(0, colon).toInt();
      cutoffMinute = timeVal.substring(colon + 1).toInt();
    }
    saveConfig();
    client.println("HTTP/1.1 303 See Other");
    client.println("Location: /");
    client.println();
    return;
  }

  if (reqLine.indexOf("POST /delete_student") != -1) {
    String uid = getQueryParam(body, "uid");
    uid = urlDecode(uid);
    uid.trim();

    if (uid.length() > 0) {
      JsonDocument doc;
      loadStudents(doc);
      JsonArray arr = doc.as<JsonArray>();
      for (int i = 0; i < arr.size(); i++) {
        if (arr[i]["uid"].as<String>() == uid) {
          arr.remove(i);
          break;
        }
      }
      saveStudents(doc);
      sendPresentCount();
    }
    client.println("HTTP/1.1 303 See Other");
    client.println("Location: /");
    client.println();
    return;
  }

  // Serve Dashboard
  String html = "<html><head><meta name='viewport' content='width=device-width, initial-scale=1'><title>Attendance Dashboard</title>";
  html += "<style>body{font-family:sans-serif;margin:20px;background:#f4f4f9;}";
  html += "table{width:100%;border-collapse:collapse;margin-top:20px;background:white;}";
  html += "th,td{padding:12px;border:1px solid #ddd;text-align:left;}";
  html += "th{background:#4CAF50;color:white;}";
  html += "tr:nth-child(even){background:#f2f2f2;}";
  html += ".card{background:white;padding:20px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);margin-bottom:20px;}";
  html += "input[type=text]{padding:10px;width:200px;margin-right:10px;}";
  html += "input[type=submit]{padding:10px 20px;background:#4CAF50;color:white;border:none;border-radius:4px;cursor:pointer;}";
  html += "input[type=time]{padding:10px;margin-right:10px;}";
  html += "</style></head><body>";
  html += "<h1>Student Attendance System</h1>";

  // Cutoff settings card
  html += "<div class='card'><h2>Lecturer Cutoff Settings</h2>";
  html += "<form action='/set_cutoff' method='POST'>";
  html += "<label><input type='checkbox' name='enabled' value='1' " + String(cutoffEnabled ? "checked" : "") + "> Enable Late Cutoff</label><br><br>";
  String timeStr = String(cutoffHour < 10 ? "0" : "") + String(cutoffHour) + ":" + String(cutoffMinute < 10 ? "0" : "") + String(cutoffMinute);
  html += "Cutoff Time: <input type='time' name='time' value='" + timeStr + "' required><br><br>";
  html += "<input type='submit' value='Save Settings'>";
  html += "</form></div>";

  html += "<div class='card'><h2>Register New Student</h2>";
  html += "<p><b>Latest Scanned UID:</b> " + (latestScannedUID == "" ? "None (Scan a card now)" : latestScannedUID) + "</p>";
  html += "<form action='/register' method='POST'>";
  html += "Name: <input type='text' name='name' required>";
  html += "<input type='hidden' name='uid' value='" + latestScannedUID + "'>";
  html += "<input type='submit' value='Register Student' " + String(latestScannedUID == "" ? "disabled" : "") + ">";
  html += "</form><button onclick='location.reload()'>Refresh UID</button></div>";
  
  html += "<div class='card'><h2>Registered Students</h2><table><tr><th>UID</th><th>Name</th><th>Last Seen</th><th>Action</th></tr>";

  JsonDocument doc;
  loadStudents(doc);
  JsonArray arr = doc.as<JsonArray>();
  for (JsonObject student : arr) {
    String uid = student["uid"].as<String>();
    html += "<tr><td>" + uid + "</td><td>" + student["name"].as<String>() + "</td><td>" + student["last_seen"].as<String>() + "</td>";
    html += "<td><form action='/delete_student' method='POST' style='margin:0;' onsubmit='return confirm(\"Are you sure you want to delete this student?\");'>";
    html += "<input type='hidden' name='uid' value='" + uid + "'>";
    html += "<input type='submit' value='Delete' style='background:#f44336;color:white;border:none;border-radius:4px;padding:6px 12px;cursor:pointer;'>";
    html += "</form></td></tr>";
  }
  html += "</table></div><script>fetch('/sync_time',{method:'POST',body:'t='+(Math.floor(Date.now()/1000)-(new Date()).getTimezoneOffset()*60)});</script></body></html>";

  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.print("Content-Length: ");
  client.println(html.length());
  client.println();
  client.print(html);
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  Serial.begin(115200);
  Serial1.begin(9600);

  unsigned long startWait = millis();
  while (!Serial && (millis() - startWait < 5000)) {
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
    delay(100);
  }
  digitalWrite(LED_BUILTIN, HIGH);

  Serial.println("\n--- Starting Pico Attendance System ---");

  // Initialize SPI with explicit pins (Supported in Philhower core)
  Serial.print("Initializing SPI... ");
  SPI.setRX(MISO_PIN);
  SPI.setTX(MOSI_PIN);
  SPI.setSCK(SCK_PIN);
  SPI.begin();
  Serial.println("OK");

  Serial.print("Initializing RFID... ");
  mfrc522.PCD_Init(); 

  // Add diagnostic check
  byte v = mfrc522.PCD_ReadRegister(mfrc522.VersionReg);
  Serial.print("Version: 0x");
  Serial.println(v, HEX);

  if (v == 0x00 || v == 0xFF) {
    Serial.println("!!! RFID ERROR: Communication failure. Check wiring (Pins 15, 16, 17, 18, 19) and 3.3V Power.");
  } else {
    Serial.println("RFID OK");
  }

  Serial.print("Initializing FileSystem... ");
  // Automatically format the filesystem if it fails to mount (needed for first run)
  LittleFSConfig cfg;
  cfg.setAutoFormat(true);
  LittleFS.setConfig(cfg);

  if (!LittleFS.begin()) {
    Serial.println("FAILED! (Even with auto-format)");
  } else {
    Serial.println("OK");
    loadConfig();
  }

  Serial.print("Starting Access Point... ");
  WiFi.mode(WIFI_AP);
  if (WiFi.softAP(ssid, password)) {
    Serial.println("OK");
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());
  } else {
    Serial.println("FAILED");
  }

  server.begin();
  Serial.println("Dashboard ready at http://192.168.4.1");
  sendPresentCount();

  digitalWrite(LED_BUILTIN, LOW); 
  }

  void loop() {
  WiFiClient client = server.available();
  if (client) {
    handleClient(client);
    client.stop();
  }

  // Faster RFID polling
  if (mfrc522.PICC_IsNewCardPresent()) {
    if (mfrc522.PICC_ReadCardSerial()) {
      // Visual feedback: Blink LED when card detected
      digitalWrite(LED_BUILTIN, HIGH);

      String uid = "";
      for (byte i = 0; i < mfrc522.uid.size; i++) {
        uid += (mfrc522.uid.uidByte[i] < 0x10 ? "0" : "") + String(mfrc522.uid.uidByte[i], HEX);
      }
      latestScannedUID = uid;
      Serial.println("Scanned UID: " + uid);

      JsonDocument doc;
      loadStudents(doc);
      JsonArray arr = doc.as<JsonArray>();
      bool found = false;
      bool isLate = false;
      String lastSeenStatus = "";

      int currHour = 0, currMin = 0;
      bool isTimeSynced = (syncEpoch > 0);
      if (isTimeSynced) {
        unsigned long localSec = getCurrentEpoch();
        unsigned long secsToday = localSec % 86400;
        currHour = secsToday / 3600;
        currMin = (secsToday % 3600) / 60;

        if (cutoffEnabled) {
          if (currHour > cutoffHour || (currHour == cutoffHour && currMin >= cutoffMinute)) {
            isLate = true;
          }
        }
      }

      for (JsonObject student : arr) {
        if (student["uid"].as<String>() == uid) {
          found = true;
          if (isLate) {
            lastSeenStatus = "Late (" + formatTime(currHour, currMin) + ")";
            student["last_seen"] = lastSeenStatus;
          } else {
            if (isTimeSynced) {
              lastSeenStatus = "Present (" + formatTime(currHour, currMin) + ")";
            } else {
              lastSeenStatus = "Present (No Clock Sync)";
            }
            student["last_seen"] = lastSeenStatus;
          }
          break;
        }
      }
      if (found) {
        saveStudents(doc);
        if (!isLate) {
          int count = getPresentCount();
          Serial1.print("<SCAN:OK,");
          Serial1.print(count);
          Serial1.println(">");
          Serial.print("Scan success (Present). Count: ");
          Serial.println(count);
        } else {
          int count = getPresentCount();
          Serial1.print("<SCAN:ERR,");
          Serial1.print(count);
          Serial1.println(">");
          Serial.print("Scan rejected (LATE). Count: ");
          Serial.println(count);
        }
      } else {
        int count = getPresentCount();
        Serial1.print("<SCAN:ERR,");
        Serial1.print(count);
        Serial1.println(">");
        Serial.print("Scan rejected (UNKNOWN). Count: ");
        Serial.println(count);
      }

      mfrc522.PICC_HaltA();
      mfrc522.PCD_StopCrypto1();

      delay(500); // Prevent double-scans
      digitalWrite(LED_BUILTIN, LOW);
    }
  }
  }
