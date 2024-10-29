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