from turtle import Turtle, Screen
import time
from snake import Snake
from food import Food

game_is_on = True
screen = Screen()
screen.tracer(0)
screen.setup(width=600, height=400)
screen.bgcolor("black")
screen.title("My Snake Game")
snake = Snake()
food = Food()
screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")
screen.onkey(snake.right, "Right")
while game_is_on:
    screen.update()
    time.sleep(0.1)
    snake.move()

    if snake.head.distance(food) < 15:
        food.refresh()

screen.exitonclick()
