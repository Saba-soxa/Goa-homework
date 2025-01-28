# N1  

def between(a,b):
    return list(range(a, b + 1))
    return(between(1, 4))

# N2

def solution(string):
    return string[::-1]

# N3

def boolean_to_string(b):
    return str(b)


# N4


def create_array(n):
    res=[]
    i=1
    while i<=n:
        res +=[i]
        i = i + 1
    return res


# N5

def quarter_of(month):
    if month < 4:
        return 1
    elif 3 < month < 7:
        return 2
    elif 6 < month < 10:
        return 3
    else:
        return 4