import random
from hangman_words import word_list
from hangmanASCIIART import logo, stages


lives = 6
chosen_word = random.choice(word_list)
word_length = len(chosen_word)
display = []  # list
wrong_letters = []
for letter in range(word_length):
    display += "_"
print(display)

end_of_game = False
while not end_of_game:
    guess = input("Guess a letter: ").lower()
    print(". . .")

    if guess in display:
        print(f"you already guessed {guess}")
        print(". . .")

    if guess in wrong_letters:
        print(f'You already guessed {guess}')
        print(". . .")

    for position in range(word_length):
        letter = chosen_word[position]
        if letter == guess:
            display[position] = letter
    print(". . .")
    print(display)

    if guess not in chosen_word:
        wrong_letters.append(guess)
        lives -= 1
        print(". . .")
        print("Thats not in the word.. you lose a life")
        print(". . .")
        print(f"{lives} lives remaining")
        print(". . .")
        if lives == 0:
            end_of_game = True
            print("You lose")

    if "_" not in display:
        end_of_game = True
        print("You win")
    print(stages[lives])


# Add Degree of difficulty for words
# Add category of words, like states, medical, etc...
