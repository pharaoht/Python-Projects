from turtle import Turtle, Screen
import random
screen = Screen()
tim = Turtle()
width = 1
height = 1
colours = ["royal blue", "navy", "aquamarine",
           "medium spring green", "pale green", "gold", "crimson", "dark magenta", "dark slate blue", "red", "wheat", "seagreen"]
directions = [0, 90, 180, 270]
tim.speed("fastest")
for _ in range(300):
    tim.pensize(15)
    tim.color(random.choice(colours))
    tim.forward(30)
    tim.setheading(random.choice(directions))


screen.setup(width, height)
screen.exitonclick()
