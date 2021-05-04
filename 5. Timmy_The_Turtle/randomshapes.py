from turtle import Turtle, Screen
import random

tim = Turtle()
colours = ["royal blue", "navy", "aquamarine",
           "medium spring green", "pale green", "gold", "crimson", "dark magenta", "dark slate blue", "red"]
num_sides = 3
while num_sides != 10:
    tim.color(random.choice(colours))
    for _ in range(num_sides):
        angle = 360 / num_sides

        tim.forward(100)
        tim.right(angle)
    num_sides += 1


screen = Screen()
screen.exitonclick()
