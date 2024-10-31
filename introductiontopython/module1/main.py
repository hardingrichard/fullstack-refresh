print("hello world")

x = 32.10
y = 10
z = True

print(type(x))
print(type(y))
print(type(z))

print(isinstance(x, float))
print(isinstance(y, float))
print(isinstance(z, float))
print(isinstance(y, int))

number = 32
another_number = 10

print(float(number))
print(int(x))
print(float(another_number))

first_string = "hello"
second_string = first_string

print(first_string)
print(second_string)

first_string = "world"

print(first_string)
print(second_string)

second_string = first_string

print(second_string)

first_name = "richard"
last_name = "harding"
age = 35
my_name = first_name + " " + last_name

print(my_name)
print(my_name.title())
print(my_name.upper())
# print(my_name + " is " + age + " years old")
print(my_name.title() + " is " + str(age) + " years old")

middle_name = "james"
my_name = first_name + " " + middle_name + " " + last_name
print(my_name.title() + " is " + str(age) + " years old") 

the_boolean = 10 > 20
print(the_boolean)
print(type(the_boolean))

the_boolean = 20 > 10
print(the_boolean)

extra_space = "     hello     "
print(extra_space)
print(extra_space.strip())
print(extra_space.lstrip())
print(extra_space.rstrip())

first_name = "richard"
last_name = "harding"
age = 35

print(f"The first name is {first_name} and the last name is {last_name}, the age is {age}")

numbers = {"first_number": 1, "second_number": 2, "third_number": 3, "fourth_number": 4, "fifth_number": 5}  
print(numbers)

for key, value in numbers.items():
    print(f"The key is {key} and the value is {value}")
    
var_one, var_two, var_three = 10, 20, 30
print(var_one, var_two, var_three)

a, b, c, d = (33, "car", 2.158, "hey")
print(a, b, c, d)

variables = {"one": 33, "two": "car", "three": 2.158, "four": "hey"}
for key, value in variables.items():
    print(f"The key is {key} and the value is {value}")

employees = ["richard", "james", "sarah", "jane", "john"]
print(employees)
print(employees[1])
print(employees[4])
print(employees[-1])
print(employees[-3])
print(employees[1:3])
print(employees[:3])
print(employees[2:])
print(employees[0] + " Is the best employee")

employees[0] = "mark"
print(employees)

employees[4] = "rich"
print(employees)

employees = employees + ["john", "jim"]
print(employees)

employees = ["jess"] + employees
print(employees)

employees.insert(3, "dave")
print(employees)

employees.append("sue")
print(employees)

employees.insert(1, "dave")
print(employees)

# extend adds multiple items to the list
employees.extend(["tim", "bob"])
print(employees)

# sort sorts the list in alphabetical order
employees.sort()
print(employees)

# Reverses alhpabetical order
employees.sort(reverse=True)
print(employees)

# Reverses the list
employees.reverse()
print(employees)

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# remove removes the first item in the list with the value
# Use remove() when deleting an item by value rather than its position.
employees.remove("sarah")
print(employees)

# pop removes the last item or index in the list
# use pop() when removing item by position than value for use with processing or adding to another list.
employees.pop()
print(employees)

employees.pop(3)
print(employees)

# del removes the item at the index
# use del when cleaning up to delete item by its position rather than its value.
del employees[5]
print(employees)

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

num_list = [1, 2, 3, 4, 5]
colour_list = ["red", "blue", "green", "yellow", "orange"]

print(num_list)
print(colour_list)
print(num_list + colour_list)

for x in num_list:
    print(x)
    
for x in colour_list:
    print(x)
    
if "blue" in colour_list:
    print("blue is in the list")
else:
    print("blue is not in the list")

if "purple" in colour_list:
    print("purple is in the list")
else:
    print("purple is not in the list")

print(len(colour_list))
print(len(num_list))
print(len(colour_list) + len(num_list))

print(len(employees))

print(colour_list)

# sorted() returns a new list with the items in the list in alphabetical order
print(sorted(colour_list))

slice_example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(slice_example)

# slices the list from index 1 to 3
print(slice_example[1:3])

print(slice_example[4:7])

# loops through the list from index 2 to 8
for example in slice_example[2:8]:
    print(example)

# loops through the list from index 0 to 7 in increments of 2
# [start:stop:increment]
print(slice_example[:7:2])


x = 5 + 3
print(x)

x = 3 * 8
print(x)

x = 10 / 2
print(x)

x = 10 - 2
print(x)

x = 10 % 3
print(x)

a = 3
b = 7
x = a + b
print(x)

x = a*b
print(x)

x = a ** b
print(x)

x = a / b
print(x)

x = b / a
print(int(x))
print(round(x))

# add and assign
#  a = a + 5
a += 5
print(a)

# subtract and assign
#  z = z - 5    
z = 20
z -= 5
print(z)