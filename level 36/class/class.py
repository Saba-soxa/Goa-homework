# N1

def bool_to_word(boolean):
    if boolean:
        return "Yes"
    else:
        return "No"


# N2

def grow(arr):
    result = 1
    for num in arr:
        result *= num
    return result


arr = [1, 2, 3, 4]
print(grow(arr))


