// esp32_traffic_serial.ino
// Week 7 & 8: ESP32 Traffic Light Controller & Serial TX
// This code cycles through a standard traffic light sequence and sends the current state
// via UART to another microcontroller (e.g., Raspberry Pi Pico).

const int RED_PIN = 12;
const int YELLOW_PIN = 13;
const int GREEN_PIN = 14;

void setup() {
  pinMode(RED_PIN, OUTPUT);
  pinMode(YELLOW_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  
  // Initialize standard Serial for debugging
  Serial.begin(115200);
  
  // ESP32 Serial2 default pins: TX2 = GPIO 17, RX2 = GPIO 16
  // This is used for UART communication with the Pico
  Serial2.begin(9600); 
  
  Serial.println("ESP32 Traffic Light & Serial TX initialized.");
}

void setLights(bool red, bool yellow, bool green, const char* stateName) {
  digitalWrite(RED_PIN, red ? HIGH : LOW);
  digitalWrite(YELLOW_PIN, yellow ? HIGH : LOW);
  digitalWrite(GREEN_PIN, green ? HIGH : LOW);
  
  // Send the state over UART to the Pico
  Serial2.println(stateName);
  
  // Print to standard serial monitor for debugging
  Serial.print("Current State: ");
  Serial.println(stateName);
}

void loop() {
  // RED State (Stop)
  setLights(true, false, false, "STOP");
  delay(5000); // 5 seconds
  
  // RED + YELLOW State (Get Ready)
  setLights(true, true, false, "READY");
  delay(2000); // 2 seconds
  
  // GREEN State (Go)
  setLights(false, false, true, "GO");
  delay(5000); // 5 seconds
  
  // YELLOW State (Slow Down)
  setLights(false, true, false, "SLOW");
  delay(2000); // 2 seconds
}
