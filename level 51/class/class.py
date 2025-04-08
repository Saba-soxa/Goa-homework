# N1

def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]



# N2


def printer_error(s):
    n = len(s)
    err_count = sum(1 for char in s if char > "m")
    return f"{err_count}/{n}"