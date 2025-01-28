# N1
def calculate(x, y, operator):
    if operator == "+":
        return x + y
    elif operator == "-":
        return x - y
    elif operator == "*":
        return x * y
    elif operator == "//":
        return x // y if y != 0 else "cannot divide by zero"
    else:
        return "invalid operator"

print(calculate(19, 5, "+"))  
print(calculate(70, 51, "-"))  
print(calculate(17, 9, "*"))  
print(calculate(70, 10, "//")) 

# N2
def greet_user(name):
    print(f"გამარჯობა {name}, როგორ ხარ? როგორ გაატაარე ახალი წელი?")

greet_user("საბა")

# N3
def love_letter(name):
    letter = f"""
ჩემო ძვირფასო {name},  
როგორ ხარ? ძალიან მომენატრე 
როგორ გაატარე არდადეგები?
  
{name}
"""
    print(letter)


love_letter("ანა")
