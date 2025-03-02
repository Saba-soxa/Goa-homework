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
        