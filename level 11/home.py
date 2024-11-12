# N1
score = int(input("Please enter your exam score: "))

if score > 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grades: {grade}")



# N2


age = int(input("Please enter your age: "))


if age < 13:
    category = "minor"
elif 13 <= age <= 19:
    category = "teenager"
else:
    category = "an adult"


print(f"you are {category}")

# N3

number = float(input("please enter number: "))


if number == 0:
    result = "is zero"
elif number > 0:
    result = "a positive number"
else:
    result = "a negative number"


print(f"number {result}")

# N4


price = float(input("Please enter the price of the product in GEL: "))


if price > 50:
    discount = 0.10  
    final_price = price * (1 - discount)
    print(f"The final price after discount is: {final_price:.2f} GEL")
elif 20 <= price <= 50:
    discount = 0.05  
    final_price = price * (1 - discount)
    print(f"The final price after discount is: {final_price:.2f} GEL")
else:
    final_price = price 
    print(f"No discount applied. The final price is: {final_price:.2f} GEL")


