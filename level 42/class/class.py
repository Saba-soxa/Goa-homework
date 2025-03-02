# N1

def mouth_size(animal): 
    animal2 = animal.lower()
    if animal2 == 'alligator':
        return 'small'
    else:
        return 'wide'
    


# N2

def past(h, m, s):
    return (3600*h + 60*m + s) * 1000 