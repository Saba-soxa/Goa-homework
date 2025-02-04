# N1

list = [8 , 4, 2, 6]
list.remove(2)
print(len(list) + list.count(6))


# N2
nums = [2,4,8,9,5]
nums.insert(1,3)
nums.remove(9)
nums.insert(0, nums.count(8))
print(nums[3])

# N3

name = input("Enter name: ")
queue = ['John' , 'Amy' , 'Bob' , 'Adam']
queue.append(name)
print("Updated name list is: " + str(queue))
