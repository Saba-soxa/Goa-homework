# N2
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print("Entire list:", fruits)

print("First item:", fruits[0])
print("Last item:", fruits[-1])

fruits.append("fig")
print("List after adding 'fig':", fruits)

fruits.remove("banana")
print("List after removing 'banana':", fruits)


fruits[1] = "blueberry"
print("List after changing the second item to 'blueberry':", fruits)

print("Length of the list:", len(fruits))


# N3

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)

numbers.insert(0, 5)

numbers.remove(30)

numbers.reverse()

index_of_50 = numbers.index(50)
count_of_20 = numbers.count(20)

print("Modified list:", numbers)
print("Index of 50:", index_of_50)
print("Count of 20:", count_of_20)


# N4

numbers = list(range(1, 11))

first_half = numbers[:5]

second_half = numbers[5:]

squares = [number ** 2 for number in numbers]

print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)


# N5

temperatures = [72, 68, 75, 70, 78, 74, 71]

highest_temperature = max(temperatures)
print("Highest temperature:", highest_temperature)

lowest_temperature = min(temperatures)
print("Lowest temperature:", lowest_temperature)

average_temperature = sum(temperatures) / len(temperatures)
print("Average temperature:", average_temperature)

above_70 = [temp for temp in temperatures if temp > 70]

print("Temperatures above 70 degrees:", above_70)
