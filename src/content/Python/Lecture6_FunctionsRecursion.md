# Lecture 6: Functions & Recursion

- Functions organize reusable blocks of statements.
- Recursion is a function calling itself.

## 1. Functions in Python

- Define a function with `def`.
- Call a function with arguments.
- `return` sends a value back to the caller.

## 2. Function Definition

- A function definition includes a name and parameters.
- Call the function with arguments.

```python
def add(first, second):
    return first + second


print(add(2, 3))
```

```text
5
```

## 3. Functions in Python

## 4. Built-in Functions

Python includes built-in functions such as `print()`, `len()`, `type()`, and `range()`.

```python
values = [1, 2, 3]
print(len(values))
print(type(values).__name__)
print(list(range(3)))
```

```text
3
list
[0, 1, 2]
```

## 5. User defined Functions

A user-defined function is written with `def`.

```python
def double(number):
    return number * 2


print(double(4))
```

```text
8
```

## 6. Default Parameters

- A parameter can have a default value.
- Python uses that value when the caller does not supply the argument.

```python
def greet(name="friend"):
    print("Hello", name)


greet()
greet("Asha")
```

```text
Hello friend
Hello Asha
```

## 7. Recursion

- A recursive function calls itself.
- A base case stops the repeated calls.

```python
def print_backwards(n):
    if n == 0:
        return
    print(n)
    print_backwards(n - 1)


print_backwards(3)
```

```text
3
2
1
```

## 8. Recursion

- The recursive factorial example returns `n!`.
- The base case returns `1`.

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)


print(factorial(5))
```

```text
120
```

## Let's Practice

### Q1. Write a function to print the elements of a list on one line.

```python
def print_list(values):
    for value in values:
        print(value, end=" ")
    print()


print_list([1, 2, 3])
```

```text
1 2 3
```

### Q2. Write a function to find the factorial of `n`.

```python
def factorial(n):
    result = 1
    for number in range(1, n + 1):
        result *= number
    return result


print(factorial(5))
```

```text
120
```

### Q3. Write a function to print the length of a list.

```python
def print_length(values):
    print(len(values))


print_length(["a", "b", "c"])
```

```text
3
```

### Q4. Write a function to convert USD to INR.

```python
def usd_to_inr(amount, exchange_rate):
    return amount * exchange_rate


print(usd_to_inr(10, 83))
```

```text
830
```

### Q5. Write a recursive function to calculate the sum of the first `n` natural numbers.

```python
def natural_sum(n):
    if n <= 0:
        return 0
    return n + natural_sum(n - 1)


print(natural_sum(5))
```

```text
15
```

### Q6. Write a recursive function to print all elements in a list. Use the list and index as parameters.

```python
def print_elements(values, index=0):
    if index == len(values):
        return
    print(values[index])
    print_elements(values, index + 1)


print_elements(["a", "b", "c"])
```

```text
a
b
c
```
