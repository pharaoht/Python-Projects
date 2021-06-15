class User:
    # the init function will be called everytime you create an object from a class
    def __init__(self, user_id, username):
        # attributes associated with the user class
        self.id = user_id
        self.username = username
        # Set this default value
        self.followers = 0
        self.following = 0

    # unlike functions, methods always has the self keyword so it knows what object called it
    def follow(self, user):
        user.followers += 1
        self.following += 1


user_1 = User("001", "johne")
user_2 = User("001", "Mikese")
user_1.follow(user_2)
