# N1
def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    else:
        return False


# N2
def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"
    else:
        return "This is not a traffic light color."



# N3

def whatday(num):
    match num:
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        case _ :
            return "Wrong, please enter a number between 1 and 7"
        




# N4

def same_case(a, b): 
    if a.isalpha() and b.isalpha():
        if (a.islower() and b.islower()) or (a.isupper() and b.isupper()):
            return 1
        else:
            return 0
    else:
        return -1


    

# N5

def count_positives_sum_negatives(arr):
    if not arr: return []
    pos = 0
    neg = 0
    for x in arr:
        if x > 0:
            pos += 1
        if x < 0:
            neg += x
    return [pos, neg]




# N6

def find_multiples(integer, limit):
    multiples = []
    for i in range(integer, limit + 1, integer):
        multiples.append(i)
    return multiples