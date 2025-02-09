# N1

distance = 7425
speed = 550

flight_time = distance / speed
print(flight_time)

 

# N2

bill = float(input())  
GG = bill * 20 / 100  
print(float(GG)) 



# N3

weight = float(input())
height = float(input())

BMI = weight / (height ** 2)

if BMI < 18.5:
    print("Underweight")
elif 18.5 <= BMI < 25:
    print("Normal")
elif 25 <= BMI < 30:
    print("Overweight")
else:
    print("Obesity")


# n4



word = input("enter Word: ")
text = input("enter text: ")
def search(saba):
    if word in text:
        return "word found"
    else:
        return "word not found"





