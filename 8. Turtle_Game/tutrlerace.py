# Objects that are performing different methods at any one time in programming is known as their state
from turtle import Turtle, Screen

screen = Screen()
screen.setup(width=500, height=400)
user_bet = screen.textinput(
    title="Make your bet", prompt="Which turtle will win the race? Enter a color: ")
colors = ["red", "orange", "yellow", "green", "blue", "purple"]
ypositions = [-70, -40, -10, 20, 50, 80]

for turtle_index in range(0, 6):

    tim = Turtle(shape="turtle")
    tim.color(colors[turtle_index])
    tim.penup()
    tim.goto(x=-230, y=ypositions[turtle_index])


screen.exitonclick()
