import random
word_list = ['money', 'baboon', 'bacon']
chosen_word = random.choice(word_list)
word_length = len(chosen_word)
display = []  # list
for letter in range(word_length):
    display += "_"

print(f"word is {chosen_word}")
print(display)

end_of_game = False
while not end_of_game:
    guess = input("Guess a letter: ").lower()

    for position in range(word_length):
        letter = chosen_word[position]
    if letter == guess:
        display[position] = letter
    print(display)

    if "_" not in display:
        end_of_game = True
        print("You win")
