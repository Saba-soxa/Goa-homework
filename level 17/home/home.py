# N1
input_numbers = input("enter numbers,(7,2,8,6,4): ")
numbers = [int( num.strip() ) for num in input_numbers.split(' ')]
sum_numbers = sum(numbers)
print("numbers sum:", sum_numbers)


# N2
first_number = int(input("enter 1 number: "))
numbers = []
while True:
    user_input = input("enter other numbers (touch Enter for stop): ")
    if user_input == "":
        break
    numbers.append(int(user_input))
print("you entrr", len(numbers), "number")
