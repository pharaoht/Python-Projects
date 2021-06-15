def add(*args):
    print(args[3])
    sum = 0
    for n in args:
        sum += n
    return sum


print(add(2, 3, 4, 5, 56, 6, 7, 6, 86, 57, 47, 4, 6, 435, 36, 376, 63, 4634, 6354, 63,
          63, 2, 4, 43, 45, 6, 65436, -43, -6543, -34, 54, -44, -65, -54, -342, -2434, -43353))


def calculate(**kwargs):
    print(kwargs["add"])
    for key, value in kwargs.items():
        print(key)
        print(value)


calculate(add="3", multiply="7")


class Car:
    def __init__(self, **kw):
        self.make = kw["make"]
        # the benefit of get() is that if there isnt a key called model in the dictionary it wont throw an error, it will return null
        self.model = kw.get("model")


my_car = Car(make="Nissan", model="GT-R")
print(my_car.model)
