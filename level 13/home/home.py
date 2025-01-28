# N1

desired_number = 7
user_input = 0
while user_input != desired_number:
    user_input = int(input("enter number 1-10: "))
    if user_input != desired_number:
        print("incorect.")
    else:
        print("corect.")

# N2

number = 1
while number <= 100:
    if number % 5 == 0:
        print(number)
    number += 1

# N3


correct_password = "group55"

user_password = ""

while user_password != correct_password:
    user_password = input("enter pasword: ")
    if user_password != correct_password:
        print("pasvors is icorect, try again.")
    else:
        print("pasword is corect!")
