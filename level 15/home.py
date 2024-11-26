# N2
even_number = 0
caunt = 0
number = 2

while number <= 100:
    even_number += number
    caunt += 1
    number += 2

average =  even_number / caunt
print("It is the arithmetic mean of all even numbers between 1 and 100:", average)

# N3

number = float(input("enter number: "))

if number > 0:
    print("Positive.")
elif number < 0:
    print("negative.")
else:
    print("number is 0.")

# N4

def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        return True
    else:
        return False

year = int(input("enter year: "))

if is_leap_year(year):
    print("{year} the year is lean.")
else:
    print("{year} the year is not lean.")
