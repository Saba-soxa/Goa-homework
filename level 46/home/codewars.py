# N1

def solution(string, ending):
    return string.endswith(ending)

# N2

def basic_op(operator, value1, value2):
    if operator=='+':
        return value1+value2
    if operator=='-':
        return value1-value2
    if operator=='/':
        return value1/value2
    if operator=='*':
        return value1*value2
    


# N3

def digitize(n):
    return [int(x) for x in str(n)[::-1]]


# N4

def century(year):
    return (year + 99) // 100

# N5

def litres(time):
    return int(time * 0.5)
