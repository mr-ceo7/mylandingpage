import math

class Shape:
    def area(self):
        """
        This method should be implemented by subclasses
        """
        pass

class Circle(Shape):
    def __init__(self, diameter):
        self.diameter = diameter

    def area(self):
        # Calculate the circle area: Area = pi * r^2 where r = diameter / 2
        r = self.diameter / 2
        return math.pi * (r ** 2)

class Square(Shape):
    def __init__(self, length):
        self.length = length

    def area(self):
        # Calculate the square area: Area = length^2
        return self.length ** 2

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        # Calculate the rectangle area: Area = length * width
        return self.length * self.width

class RightTriangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        # Calculate the triangle area: Area = (base * height) / 2
        return (self.base * self.height) / 2

# Test the program
circle = Circle(10)
square = Square(5)
rectangle = Rectangle(4, 6)
triangle = RightTriangle(3, 8)

# Rounding circle area to 2 decimal places to match expected output format example
print("Circle area:", round(circle.area(), 2))
print("Square area:", square.area())
print("Rectangle area:", rectangle.area())
print("Triangle area:", triangle.area())
