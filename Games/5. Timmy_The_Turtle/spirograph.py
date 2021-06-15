from turtle import Turtle, Screen
import random
screen = Screen()
tim = Turtle()
width = 1
height = 1
colours = ["royal blue", "navy", "aquamarine",
           "medium spring green", "pale green", "gold", "crimson", "dark magenta", "dark slate blue", "red", "wheat", "seagreen"]

tim.speed("fastest")


def draw_spirograph(size_of_gap):
    for _ in range(int(360 / size_of_gap)):
        tim.color(random.choice(colours))
        tim.circle(100)
        tim.setheading(tim.heading() + size_of_gap)


draw_spirograph(4)

screen.setup(width, height)
screen.exitonclick()
