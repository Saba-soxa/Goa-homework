# N1
def პირადი_ინფორმაცია(სახელი, გვარი, ასაკი, ქვეყანა, ქალაქი,):
    წინადადება = f"მე მქვია {სახელი} {გვარი}, ვარ {ასაკი} წლის. ვცხოვრობ {ქვეყანა}-ში, ქალაქ {ქალაქი}-ში.."
    return წინადადება


სახელი = "საბა"
გვარი = "სოხაშვილი"
ასაკი = 12
ქვეყანა = "საქართველო"
ქალაქი = "თბილისი"


წინადადება = პირადი_ინფორმაცია(სახელი, გვარი, ასაკი, ქვეყანა, ქალაქი, )
print(წინადადება)


# N2
def simple_calculator(num1, num2, operation):
    if operation == "plus":
        return num1 + num2
    elif operation == "deduction":
        return num1 - num2
    elif operation == "multiplication":
        return num1 * num2
    elif operation == "division":
        if num2 == 0:
            return "Error: Cannot divide by zero"
        else:
            return num1 / num2
    else:
        return "Error: Unknown operation"


print(simple_calculator(10, 43, "plus"))  
print(simple_calculator(140, 55, "deduction"))  
print(simple_calculator(103, 9, "multiplication"))  
print(simple_calculator(100, 50, "division"))  
print(simple_calculator(42, 8, "division"))  
print(simple_calculator(193, 5, "Error: Unknown operation"))  



