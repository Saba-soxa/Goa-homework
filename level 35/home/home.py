# ცვლადი
a = 10  
b = -5  
print(a + b)  

x = 3.14  
y = 2.5  
print(x * y)  


name = "Python"
print(name.upper())  

# ოპერაციები

print(10 + 5) 
print(10 / 3)  
print(10 ** 2)  

print(5 > 3)  
print(4 == 4)  
print(7 != 2)  

print(True and False)  
print(not True)  
print(5 > 3 or 2 > 10)  

# if else elif

age = 18
if age >= 18:
    print("u are adult")
else:
    print("u aren't adult")

num = 5
if num > 0:
    print("corect")
elif num < 0:
    print("negative")
else:
    print("zero")

x = 10
if x % 2 == 0 and x % 5 == 0:
    print("x იყოფა 2-ზეც და 5-ზეც")


# for ციკლი და while ციკლი

for i in range(3):
    print(i) 

x = 0
while x < 3:
    print(x)
    x += 1  

for num in range(10):
    if num == 5:
        break
    print(num)  


# ფუნქციები

def greet(name):
    return f"გამარჯობა, {name}!"

print(greet("საბა"))  

def square(n):
    return n ** 2

print(square(4))  

def add(a, b=10):
    return a + b

print(add(5))  
print(add(5, 3))  


# ლისტები

nums = [1, 2, 3, 4, 5]
print(nums[0]) 
nums.append(6)  
print(nums)  

nums.remove(3)  
print(nums)  

print(len(nums)) 
