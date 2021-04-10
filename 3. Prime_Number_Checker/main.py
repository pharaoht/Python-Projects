def check_num(num):
    counter = 0
    if num == 0:
        return print("Can not use 0")

    for i in range(1, num + 1):
        if num % i == 0:
            counter += 1

    if counter <= 2:
        print(f"{num} is Prime number")
    else:
        print(f"{num} is not a prime ")


check_num(4)
