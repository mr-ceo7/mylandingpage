#include <math.h>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

/* Function Definitions */

double circle_area(double diameter)
{
    double radius = diameter / 2.0;
    return M_PI * radius * radius;
}

double square_area(double length)
{
    return length * length;
}

double rectangle_area(double length, double width)
{
    return length * width;
}

double triangle_area(double base, double height)
{
    return (base * height) / 2.0;
}
