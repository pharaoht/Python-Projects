from turtle import Turtle, Screen

tim = Turtle()
screen = Screen()


def move_forwards():
    tim.forward(10)


def move_backwards():
    tim.backward(10)


def move_left():
    new_heading = tim.heading() + 10
    tim.setheading(new_heading)


def move_right():
    new_heading = tim.heading() - 10
    tim.setheading(new_heading)


screen.listen()
# when passing functions as arguments we dont put the () because it was run it before the event listener is triggered
# Higher order functions, a function that can work with other functions
screen.onkey(key="w", fun=move_forwards)
screen.onkey(key="s", fun=move_backwards)
screen.onkey(key="a", fun=move_left)
screen.onkey(key="d", fun=move_right)

screen.exitonclick()
