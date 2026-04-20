#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

// A fake memory buffer to simulate hardware registers since we are running on a PC
uint32_t fake_memory[1024]; 

int main() {
    printf("=== Week 4: Pointers & Memory Management ===\n\n");

    // 1. Pointer Basics
    int value = 42;
    int *ptr = &value;
    printf("1. Pointer Basics:\n");
    printf("   Value: %d\n", value);
    printf("   Address of Value: %p\n", (void*)&value);
    printf("   Pointer holds address: %p\n", (void*)ptr);
    printf("   Dereferenced pointer value: %d\n\n", *ptr);

    // 2. Arrays and Pointers
    printf("2. Arrays and Pointer Arithmetic:\n");
    int arr[3] = {10, 20, 30};
    int *arr_ptr = arr; // points to first element
    for(int i = 0; i < 3; i++) {
        printf("   arr[%d] = %d at address %p\n", i, *(arr_ptr + i), (void*)(arr_ptr + i));
    }
    printf("\n");

    // 3. Dynamic Memory Allocation
    printf("3. Dynamic Memory Allocation:\n");
    int *dyn_arr = (int*)malloc(3 * sizeof(int));
    if (dyn_arr == NULL) {
        printf("   Memory allocation failed!\n");
        return 1;
    }
    dyn_arr[0] = 100;
    dyn_arr[1] = 200;
    dyn_arr[2] = 300;
    printf("   Allocated dynamic memory at %p\n", (void*)dyn_arr);
    printf("   Values: %d, %d, %d\n", dyn_arr[0], dyn_arr[1], dyn_arr[2]);
    free(dyn_arr);
    printf("   Memory freed.\n\n");

    // 4. Memory-Mapped I/O Simulation
    printf("4. Memory-Mapped I/O Simulation:\n");
    // In real hardware, we'd cast an actual physical memory address (like 0x40020000).
    // Here we cast the address of our fake_memory buffer.
    volatile uint32_t *gpio_port = (volatile uint32_t *)&fake_memory[0]; 
    
    // Set bit 0 to turn on an "LED" using memory-mapped I/O approach
    *gpio_port = 0x01; 
    printf("   Wrote 0x%02X to GPIO simulated register at %p\n", *gpio_port, (void*)gpio_port);

    return 0;
}
