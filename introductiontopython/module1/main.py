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

