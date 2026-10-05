# Lecture 8: OOP in Python

- Object-oriented programming uses objects to represent real-world scenarios in code.

## 1. OOP in Python

- Object-oriented programming uses objects to map real-world scenarios in code.

## 2. Class & Object in Python

- A class is a blueprint for creating objects.
- An object is an instance of a class.

```python
class Student:
    name = "Karan Kumar"


student = Student()
print(student.name)
```

```text
Karan Kumar
```

## 3. Class & Instance Attributes

- A class attribute is defined on the class and can be accessed through the class.
- An instance attribute belongs to an individual object.

```python
class Student:
    college = "ABC College"

    def __init__(self, name):
        self.name = name


student = Student("Karan")
print(Student.college)
print(student.name)
```

```text
ABC College
Karan
```

## 4. `__init__` Function

- `__init__()` runs when an object is created.
- The `self` parameter refers to the current instance.
- `self` lets a method access the instance's attributes.

```python
class Student:
    def __init__(self, fullname):
        self.name = fullname


student = Student("Karan")
print(student.name)
```

```text
Karan
```

## 5. Constructor

- The constructor is `__init__()`.
- The `self` parameter refers to the current instance and is used to access its attributes.

## 6. Methods

Methods are functions that belong to objects.

```python
class Student:
    def __init__(self, fullname):
        self.name = fullname

    def hello(self):
        print("hello", self.name)


student = Student("Karan")
student.hello()
```

```text
hello Karan
```

## 7. Static Methods

- A static method does not use the `self` parameter.
- The `@staticmethod` decorator marks a method as static.

```python
class Student:
    @staticmethod
    def college():
        print("ABC College")


Student.college()
```

```text
ABC College
```

> Note: Decorators wrap a function to extend its behavior without permanently modifying the wrapped function.

## 8. Important

## 9. Abstraction

- Abstraction hides the implementation details of a class.
- It shows only the essential features to the user.

## 10. Encapsulation

- Encapsulation wraps data and functions into a single unit (an object).

## Let's Practice

### Q1. Create a `Student` class that accepts a name and three subject marks, then add a method to print the average.

```python
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def print_average(self):
        print(sum(self.marks) / len(self.marks))


student = Student("Asha", [90, 80, 100])
student.print_average()
```

```text
90.0
```

### Q2. Create an `Account` class with balance and account number, and methods for debit, credit, and printing the balance.

```python
class Account:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance

    def debit(self, amount):
        self.balance -= amount

    def credit(self, amount):
        self.balance += amount

    def print_balance(self):
        print(self.balance)


account = Account("12345", 100)
account.debit(25)
account.credit(10)
account.print_balance()
```

```text
85
```
