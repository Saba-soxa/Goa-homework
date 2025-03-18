# N1

def repeats(s):
    numbers = set()

    for number in s:
        if number in numbers:
            numbers.remove(number)
        else:
            numbers.add(number)
    return sum(numbers)


# N2

def litres(time):
    return int(time * 0.5)


# N3

def cat_mouse(x):
    distance = x.find('m') - x.find('C')
    if distance <= 4:
        return "Caught!"
    else:
        return "Escaped!"