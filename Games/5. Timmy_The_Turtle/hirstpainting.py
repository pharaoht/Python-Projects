# import colorgram
# rgb_colors = []
# colors = colorgram.extract("5. Timmy_The_Turtle\image.jpg", 20)
# for color in colors:
#     r = color.rgb.r
#     g = color.rgb.g
#     b = color.rgb.b
#     newcolor = (r, g, b)
#     rgb_colors.append(newcolor)
# print(rgb_colors)

import turtle as turtle_module
import random
screen = turtle_module.Screen()
screen.setup(width=500, height=500)

turtle_module.colormode(255)
tim = turtle_module
color_list = [(232, 240, 235), (225, 233, 238), (237, 34, 109), (153, 24, 65), (240, 73, 34), (7, 147, 92), (218, 170, 46), (178, 159, 44),
              (25, 123, 190), (44, 191, 232), (83, 20, 77), (244, 220, 45), (252, 223, 1), (125, 192, 84), (183, 39, 103), (207, 64, 24), (54, 171, 104), (169, 24, 19)]
tim.penup()
tim.setheading(220)
tim.forward(300)
tim.setheading(0)
num_of_dots = 101
tim.speed("fastest")


for dot_num in range(1, num_of_dots):
    tim.dot(20, random.choice(color_list))
    tim.forward(50)

    if dot_num % 10 == 0:
        tim.setheading(90)
        tim.forward(50)
        tim.setheading(180)
        tim.forward(500)
        tim.setheading(0)


screen.exitonclick()
