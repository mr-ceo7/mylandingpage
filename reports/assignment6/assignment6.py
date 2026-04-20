import board
import digitalio
import time

# Code Explanation:
# What bounce is: When a physical button is pressed, its metallic contacts "bounce" or 
# rapidly connect and disconnect several times before settling, causing multiple input signals.
# How this solution fixes it: We implemented a debounce timer that waits for the physical 
# signal to remain stable for a short duration (50ms) before registering it as a valid press.

button = digitalio.DigitalInOut(board.GP15)
button.direction = digitalio.Direction.INPUT

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

# =========================
# TODO VARIABLES
# =========================
button_state = False
last_button_state = False
last_debounce_time = 0.0
debounce_delay = 0.05  # 50 milliseconds
led_state = False
# =========================

while True:
    reading = button.value

    # STEP 1: Detect change
    if reading != last_button_state:
        last_debounce_time = time.monotonic()

    # STEP 2: Check if stable
    if (time.monotonic() - last_debounce_time) > debounce_delay:
        # If the state has changed after the debounce delay
        if reading != button_state:
            button_state = reading
            
            # STEP 3: Toggle LED
            if button_state == True:
                led_state = not led_state
                
                # STEP 4: Apply output
                led.value = led_state

    # STEP 5: Update last state
    last_button_state = reading

    time.sleep(0.01)
