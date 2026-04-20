// pico_receiver.ino
// Week 7 & 8: RPi Pico Serial RX
// This code receives the traffic light state from the ESP32 via UART and prints it.

// For RPi Pico, Serial1 uses GP0 (TX) and GP1 (RX) by default.
void setup() {
  // Initialize USB serial for debugging
  Serial.begin(115200);
  
  // Initialize UART communication to receive from ESP32.
  // Wiring: ESP32 TX (GPIO 17) -> Pico RX (GP1). Must share common GND.
  Serial1.begin(9600);
  
  Serial.println("Pico Serial Receiver initialized.");
  Serial.println("Waiting for traffic light states from ESP32...");
}

void loop() {
  // Check if data is available from the ESP32 over UART
  if (Serial1.available()) {
    String stateMessage = Serial1.readStringUntil('\n');
    stateMessage.trim(); // Remove whitespace/newlines
    
    if (stateMessage.length() > 0) {
      Serial.print("[From ESP32 via UART]: Traffic Light is now -> ");
      Serial.println(stateMessage);
      
      // Additional logic can be added here, such as:
      // if (stateMessage == "STOP") { digitalWrite(PEDESTRIAN_LIGHT, HIGH); }
    }
  }
}
