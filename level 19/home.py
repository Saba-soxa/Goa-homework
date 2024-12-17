# N1

numbers = []
for i in range(10):
   
    number = int(input("enter numbers: "))
    numbers.append(number)
print("entred nymbers:", numbers)


# N2

numbers = []

for i in range(10):
    number = int(input("enter numbers: "))
    numbers.append(number)
largest_number = numbers[0]


for number in numbers:
    if number > largest_number:
        largest_number = number
print("largest number:", largest_number)


# N3

# N4

numbers = input("write a list (separate with a comma): ")


number_list = numbers.split(',')

reversed_list = number_list[::-1]
print("write the list backwards:" ', '.join( reversed_list ))
