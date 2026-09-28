#include <stdio.h>

/* Function prototypes so main.c knows the functions exist */
double circle_area(double diameter);
double square_area(double length);
double rectangle_area(double length, double width);
double triangle_area(double base, double height);

int main()
{
    printf("Circle area: %.2f\n", circle_area(10));
    printf("Square area: %.2f\n", square_area(5));
    printf("Rectangle area: %.2f\n", rectangle_area(4, 6));
    printf("Triangle area: %.2f\n", triangle_area(3, 8));

    return 0;
}
