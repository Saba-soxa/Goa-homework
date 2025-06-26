# N1
def is_leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True  # Leap year
            else:
                return False  # Not leap
        else:
            return True  # Leap year
    else:
        return False  # Not leap

# Input from user
year = int(input("Enter a year: "))

if is_leap_year(year):
    print(f"{year} is a leap year ✅")
else:
    print(f"{year} is not a leap year ❌")



# N2
import random

names = input("შეიყვანე სახელები მძიმით გამოყოფილად: ").split(", ")
payer = random.choice(names)
print(f"{payer} უნდა გადაიხადოს ყველას საკვების ფული 💸")


# N3

numbers = list(range(1, 101))  # ან შენი სურვილით
result = []

for num in numbers:
    if num % 3 == 0 and num % 5 == 0:
        result.append("FizzBuzz")
    elif num % 3 == 0:
        result.append("Fizz")
    elif num % 5 == 0:
        result.append("Buzz")
    else:
        result.append(num)

print(result)
