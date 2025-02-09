# N1
a = "code"
b = "wa.rs"
name = a + b


# N2

def is_even(n):
    if isinstance(n, float) and n % 1 != 0:
        return False  
    return n % 2 == 0

# N3
def main(verb, noun):
    return verb + noun

# N4

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# N5

def number_to_string(num):
    try:
        return str(num)
    except:
        return None



# N6

def boolean_to_string(b):
    if b:
        return "True"
    return "False"

# N7

def say_hello(name):
    return f"Hello, {name}"


# N8

def quarter_of(month):
    if month in range(1, 4):
        return 1
    elif month in range(4, 7):
        return 2
    elif month in range(7, 10):
        return 3
    elif month in range(10, 13):
        return 4



