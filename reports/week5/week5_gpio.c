#include <stdint.h>

// ==========================================
// Week 5: Introduction to Microcontrollers
// Simulated Bare-Metal ARM GPIO Configuration
// ==========================================

// Simulated ARM GPIO Registers for a generic microcontroller (e.g., STM32)
// In a real ARM MCU, these would be actual physical memory addresses.
#define GPIO_BASE       0x40020000

// We use pointers to map these addresses to variables we can modify.
// The 'volatile' keyword tells the compiler the hardware can change these unexpectedly.
#define GPIO_MODER      (*(volatile uint32_t *)(GPIO_BASE + 0x00)) // Mode register
#define GPIO_ODR        (*(volatile uint32_t *)(GPIO_BASE + 0x14)) // Output data register
#define GPIO_BSRR       (*(volatile uint32_t *)(GPIO_BASE + 0x18)) // Bit set/reset register

// Define our LED pin number
#define LED_PIN         5

// Simple blocking delay function
void delay(volatile uint32_t count) {
    while(count--) {
        // Do nothing, just waste CPU cycles to create a delay
    }
}

int main() {
    // ---------------------------------------------------------
    // 1. System Initialization & GPIO Configuration
    // ---------------------------------------------------------
    
    // To set Pin 5 as an output, we modify its specific bits in the Mode Register.
    // Each pin has 2 bits. Pin 5 uses bits 10 and 11.
    // Mode 01 is General Purpose Output mode.
    
    // First, clear the existing bits using a bitwise AND and a negated mask
    GPIO_MODER &= ~(0x3 << (LED_PIN * 2)); 
    
    // Then, set the desired bits using bitwise OR
    GPIO_MODER |=  (0x1 << (LED_PIN * 2)); 

    // ---------------------------------------------------------
    // 2. Main Super Loop (Infinite Execution)
    // ---------------------------------------------------------
    while (1) {
        // Turn LED ON by setting the specific bit in the Bit Set/Reset Register.
        // Writing 1 to bit 5 sets the corresponding Output Data Register bit high.
        GPIO_BSRR = (1 << LED_PIN);
        
        // Wait for a period of time
        delay(1000000);
        
        // Turn LED OFF by setting the reset bit (shifted by 16 bits).
        // Writing 1 to bit 21 (5 + 16) resets the Output Data Register bit low.
        GPIO_BSRR = (1 << (LED_PIN + 16));
        
        // Wait for a period of time
        delay(1000000);
    }
    
    return 0; // A microcontroller program never actually terminates
}
