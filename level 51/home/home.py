# N1

def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]


# N2

def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1


# N3

def row_sum_odd_numbers(n):
    return n ** 3


# N4

def nb_year(p0, percent, aug, p, years = 0):
    if p0 < p:
        return nb_year(p0 + int(p0 * percent / 100) + aug, percent, aug, p, years + 1)
    return years


# N5

def printer_error(s):
    n = len(s)
    err_count = sum(1 for char in s if char > "m")
    return f"{err_count}/{n}"
