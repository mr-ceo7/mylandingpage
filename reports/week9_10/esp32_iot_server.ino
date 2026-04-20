// Week 9 & 10: ESP32 IoT Server
// Combines a DS18B20 Temperature Sensor, an MFRC522 RFID reader, an OLED display,
// and a Web Server into a single integrated ESP32 application (Wokwi Compatible).

#include <Wire.h>
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <MFRC522.h>
#include <WiFi.h>
#include <WebServer.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// ---------------------------------------------------------
// PIN DEFINITIONS (Matching standard Wokwi ESP32 wiring)
// ---------------------------------------------------------

// DS18B20 Temperature Sensor (OneWire)
#define ONE_WIRE_BUS 4

// RFID Pins (SPI: SCK=18, MISO=19, MOSI=23)
#define SS_PIN  5
#define RST_PIN 22

// OLED Display (I2C: SDA=21, SCL=22)
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

// ---------------------------------------------------------
// PERIPHERAL INSTANCES
// ---------------------------------------------------------
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
MFRC522 rfid(SS_PIN, RST_PIN);
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
WebServer server(80);

// WiFi (Wokwi uses a virtual WiFi gateway)
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// Global State
String latestRFID = "None";
float temperature = 0.0;

// ---------------------------------------------------------
// WEB SERVER HANDLER
// ---------------------------------------------------------
void handleRoot() {
  String html = "<html><head><title>ESP32 IoT Dashboard</title>";
  html += "<style>body { font-family: Arial; text-align: center; margin-top: 50px; }</style>";
  html += "</head><body>";
  html += "<h1>ESP32 IoT Sensor Dashboard</h1>";
  html += "<div style='font-size: 24px;'>";
  html += "<p><b>Temperature:</b> " + String(temperature) + " &deg;C</p>";
  html += "<p><b>Last RFID Scanned:</b> <span style='color: blue;'>" + latestRFID + "</span></p>";
  html += "</div>";
  html += "<script>setTimeout(function(){location.reload()}, 2000);</script>";
  html += "</body></html>";
  
  server.send(200, "text/html", html);
}

// ---------------------------------------------------------
// SETUP
// ---------------------------------------------------------
void setup() {
  Serial.begin(115200);
  
  // 1. Initialize DS18B20
  sensors.begin();
  
  // 2. Initialize I2C for OLED
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
  }
  display.clearDisplay();
  display.setTextColor(WHITE);

  // 3. Initialize SPI for RFID
  SPI.begin();
  rfid.PCD_Init();

  // 4. Connect to WiFi
  Serial.print("Connecting to WiFi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected. IP Address: ");
  Serial.println(WiFi.localIP());

  // 5. Start the HTTP Web Server
  server.on("/", handleRoot);
  server.begin();
}

// ---------------------------------------------------------
// MAIN LOOP
// ---------------------------------------------------------
void loop() {
  // 1. Handle incoming Web Server client requests
  server.handleClient();

  // 2. Read Temperature from DS18B20
  sensors.requestTemperatures(); 
  temperature = sensors.getTempCByIndex(0);

  // 3. Read RFID tags (if a new card is presented)
  if (rfid.PICC_IsNewCardPresent() && rfid.PICC_ReadCardSerial()) {
    latestRFID = "";
    for (byte i = 0; i < rfid.uid.size; i++) {
      latestRFID += String(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
      latestRFID += String(rfid.uid.uidByte[i], HEX);
    }
    latestRFID.trim();
    latestRFID.toUpperCase();
    
    // Halt PICC to stop reading the same card continuously
    rfid.PICC_HaltA();
  }

  // 4. Update the local OLED Display
  display.clearDisplay();
  display.setCursor(0,0);
  display.println("ESP32 IoT Dashboard");
  display.print("IP: "); display.println(WiFi.localIP());
  display.drawLine(0, 18, 128, 18, WHITE);
  display.setCursor(0, 24);
  display.print("Temp: "); display.print(temperature); display.println(" C");
  display.print("RFID: "); display.println(latestRFID);
  display.display();

  // Short delay to prevent overwhelming the buses
  delay(100);
}
