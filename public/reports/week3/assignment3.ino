// ==============================
// Introduction to TinkerCAD: Button-Controlled LED
// Assignment 3
// ==============================

int buttonPin = 2;
int ledPin = 8;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int ButtonState = digitalRead(buttonPin);

  if (ButtonState == HIGH) {
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin, LOW);
    delay(200);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
