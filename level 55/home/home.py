# N1
def small_enough(array, limit):
    return max(array)<=limit

# N2
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

# N3
import math
def is_square(n):
    return n > -1 and math.sqrt(n) % 1 == 0;

# N4

CRITERIA = (str.islower, str.isupper, str.isdigit)

def password(s):
    return len(s)>7 and all( any(map(f,s)) for f in CRITERIA)


# N5

def get_size(w, h, d):
    area = 2*(w*h + h*d + w*d)
    volume = w*h*d
    return [area, volume]