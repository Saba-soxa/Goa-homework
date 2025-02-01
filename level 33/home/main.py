# N1

msg = input()
print(msg.replace("#", ""))



# N2

name = input("Enter your name: ")
age = input("Enter your age: ")

sentence = "Hello, {0}. You are {1} years old. ".format(name, age)
print(sentence)



# N3

words = ["Python", "is", "fun"]
result = " ".join(words)
print(result)



# N4

sentence = input("Enter sentence: ")
words = sentence.split()
print("words list:", words)



# N5

sentence = input("Enter sentence: ")
old_word = input("enter word which change u want: ")
new_word = input("enter new word: ")
modified_sentence = sentence.replace(old_word, new_word)
print("changed word:", modified_sentence)



# N6

sentence = input("enter a sentence: ")
print("uppercase:", sentence.upper())