// Week 11: RFID Access Control System
// RPi Pico code to read an RFID tag and activate a Relay for an Electric Door Lock.
// Note: This requires the MFRC522 library.

#include <SPI.h>
#include <MFRC522.h>

// ---------------------------------------------------------
// PIN DEFINITIONS (Raspberry Pi Pico)
// ---------------------------------------------------------

// SPI Pins for MFRC522 (Pico SPI0)
#define RST_PIN   20 // GP20
#define SS_PIN    17 // GP17 (CSn)
// SCK  = GP18
// MOSI = GP19
// MISO = GP16

// Relay & Indicator Pins
#define RELAY_PIN 15 // GP15 - Triggers the electric door lock
#define BUZZER_PIN 14 // GP14 - Audio feedback
#define GREEN_LED 13  // GP13 - Access Granted
#define RED_LED   12  // GP12 - Access Denied

// ---------------------------------------------------------
// PERIPHERAL INSTANCES
// ---------------------------------------------------------
MFRC522 rfid(SS_PIN, RST_PIN);

// ---------------------------------------------------------
// AUTHORIZED TAGS
// ---------------------------------------------------------
// Hardcoded authorized RFID UID (Example: 04 EA 34 52)
byte authorizedUID[4] = {0x04, 0xEA, 0x34, 0x52};

void setup() {
  Serial.begin(115200);
  
  // Initialize Pins
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  
  // Default state: Door Locked
  digitalWrite(RELAY_PIN, LOW);
  digitalWrite(GREEN_LED, LOW);
  digitalWrite(RED_LED, HIGH);

  // Initialize SPI & RFID
  SPI.begin();
  rfid.PCD_Init();
  
  Serial.println("Access Control System Initialized.");
  Serial.println("Please scan your ID card...");
}

void loop() {
  // Look for new RFID cards
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  Serial.print("Card UID: ");
  bool accessGranted = true;
  
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(rfid.uid.uidByte[i], HEX);
    
    // Check against authorized UID
    if (rfid.uid.uidByte[i] != authorizedUID[i]) {
      accessGranted = false;
    }
  }
  Serial.println();

  if (accessGranted) {
    Serial.println("Status: ACCESS GRANTED");
    grantAccess();
  } else {
    Serial.println("Status: ACCESS DENIED");
    denyAccess();
  }

  // Halt PICC
  rfid.PICC_HaltA();
}

void grantAccess() {
  // Visual & Audio Feedback
  digitalWrite(RED_LED, LOW);
  digitalWrite(GREEN_LED, HIGH);
  tone(BUZZER_PIN, 1000, 200); // 1000Hz for 200ms
  
  // Unlock Door
  digitalWrite(RELAY_PIN, HIGH);
  delay(3000); // Keep door unlocked for 3 seconds
  
  // Lock Door
  digitalWrite(RELAY_PIN, LOW);
  digitalWrite(GREEN_LED, LOW);
  digitalWrite(RED_LED, HIGH);
}

void denyAccess() {
  // Visual & Audio Feedback (3 quick beeps)
  for (int i = 0; i < 3; i++) {
    digitalWrite(RED_LED, LOW);
    tone(BUZZER_PIN, 300, 100); // 300Hz for 100ms
    delay(100);
    digitalWrite(RED_LED, HIGH);
    delay(100);
  }
}
