# N1

nums = [2, 4, 8, 9, 5]

nums.insert(1, 3)
nums.remove(9)
nums.insert(0, nums.count(8))
print(nums[3])



# N2

fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print("Fruits list:", fruits)
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])
fruits.append("fig")
print("After adding 'fig':", fruits)
fruits.remove("banana")
print("After removing 'banana':", fruits)
fruits[1] = "blueberry"
print("After changing second item to 'blueberry':", fruits)
print("Length of the list:", len(fruits))



# N3

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)
print("After appending 100:", numbers)
numbers.insert(0, 5)
print("After inserting 5 at the beginning:", numbers)
numbers.remove(30)
print("After removing 30:", numbers)
numbers.sort()
print("After sorting in ascending order:", numbers)
numbers.reverse()
print("After reversing the order:", numbers)
index_50 = numbers.index(50)
print("Index of 50:", index_50)
count_20 = numbers.count(20)
print("Count of 20:", count_20)



# N4

numbers = list(range(1, 11))
first_half = numbers[:5]
second_half = numbers[5:]
squares = [x**2 for x in numbers]
print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)
