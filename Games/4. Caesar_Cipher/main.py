alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
userDirectionInput = input(
    "Type 'encode' to encrypt, or type 'decode' to decrypt:\n")
userTextInput = input("Type your message:\n").lower()
userShiftInput = int(input("Type the shift number: \n"))

# Create a function called encrypt that takes the text and shifts inputs


def encrypt(userTextInput1, userShiftInput1):
    #: Inside the encrypt function shift each letter of the text forwards in the alphabet
    cipher_text = ""
    for letter in userTextInput:
        position = alphabet.index(letter)
        new_position = position + userShiftInput
        cipher_text += alphabet[new_position]

    print(f"The encoded text is {cipher_text}")


def decrypt(cipher_text, userShiftInput2):
    plain_text = ""
    for letter in cipher_text:
        position = alphabet.index(letter)
        new_position = position - userShiftInput
        plain_text += alphabet[new_position]
    print(f"The decoded text is {plain_text}")


if userDirectionInput == "encode":
    encrypt(userTextInput, userShiftInput)
elif userDirectionInput == "decode":
    decrypt(userTextInput, userShiftInput)
