class User:
    # the init function will be called everytime you create an object from a class
    def __init__(self, user_id, username):
        # attributes associated with the user class
        self.id = user_id
        self.username = username
        # Set this default value
        self.followers = 0


user_1 = User("001", "johne")
print(user_1.username)
