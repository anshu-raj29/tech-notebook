# Lecture 1: Python Basics

- Python is a high-level programming language.
- This lecture introduces program translation, Python syntax, variables, data types, operators, and input.

## 1. Programming and translators

- A program is a set of instructions.
- A computer executes instructions as machine code.
- A translator converts a program into a form the computer can execute.
- Compilers and interpreters are kinds of translators.

## 2. What is Python?

- Python is simple and easy to read.
- Python is free and open source.
- Python is a high-level, portable language.
- Python was developed by Guido van Rossum.

## 3. Our first program

`print()` displays a value.

```python
print("Hello World")
```

```text
Hello World
```

## 4. Python character set

- Letters: `A` to `Z` and `a` to `z`.
- Digits: `0` to `9`.
- Special symbols: `+`, `-`, `*`, `/`, and others.
- Whitespace: blank spaces, tabs, carriage returns, newlines, and form feeds.
- Other characters: ASCII and Unicode characters can be used in data or literals.

| Character group | Examples |
| --- | --- |
| Letters | `A` to `Z`, `a` to `z` |
| Digits | `0` to `9` |
| Special symbols | `+`, `-`, `*`, `/` |
| Whitespace | Blank space, tab, carriage return, newline, form feed |
| Other characters | ASCII and Unicode characters in data or literals |

## 5. Variables and memory

- A variable is a name given to a memory location in a program.
- Assigning values creates variables such as `name`, `age`, and `price`.

```python
name = "Shradha"
age = 23
price = 25.99
print(name)
print(age)
print(price)
```

```text
Shradha
23
25.99
```

## 6. Rules for identifiers

- Identifiers are names used for variables and other program elements.
- They may contain letters, digits, and underscores.
- They cannot begin with a digit or contain spaces.
- Python distinguishes uppercase and lowercase letters.

```python
student_name = "Asha"
score2 = 90
print(student_name, score2)
```

```text
Asha 90
```

## 7. Data types

- Python values have different types.
- The types covered here are integers, strings, floats, booleans, and `None`.

| Type | Example | Meaning |
| --- | --- | --- |
| Integer (`int`) | `23` | Whole number |
| Float (`float`) | `25.99` | Number with a fractional part |
| String (`str`) | `"Shradha"` | Text |
| Boolean (`bool`) | `True`, `False` | A truth value |
| None (`NoneType`) | `None` | No value |

```python
print(type(23))
print(type(25.99))
print(type("Shradha"))
print(type(True))
print(type(None))
```

```text
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>
```

## 8. Keywords

- Keywords are reserved words in Python and cannot be used as ordinary identifiers.
- Boolean literals are capitalized: `True` and `False`.

```python
is_ready = False
print(is_ready)
```

```text
False
```

## 9. Comments

- A `#` begins a single-line comment.
- Triple-quoted strings are often used to write a multi-line comment or note.

```python
# Single-line comment
"""
Multi-line
comment
"""
print("Comments do not change this output")
```

```text
Comments do not change this output
```

## 10. Operators

An operator performs an operation between operands.

| Operator group | Operators |
| --- | --- |
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Relational / comparison | `==`, `!=`, `>`, `<`, `>=`, `<=` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| Logical | `not`, `and`, `or` |

```python
a = 7
b = 2
print(a + b, a - b, a * b, a / b, a % b, a ** b)
print(a >= b, a == b)
print(a > 0 and b > 0)
```

```text
9 5 14 3.5 1 49
True False
True
```

## 11. Type conversion and casting

- Python may convert compatible numeric values during an operation.
- Adding an integer and a float produces a float.
- Adding an integer and a string raises an error.
- Explicitly cast a string when a numeric calculation is intended.

| Function | Converts to | Example |
| --- | --- | --- |
| `int(value)` | Integer | `int("2")` gives `2` |
| `float(value)` | Float | `float("2.5")` gives `2.5` |
| `str(value)` | String | `str(2)` gives `"2"` |

```python
a, b = 1, 2.0
print(a + b)

text_number = "2"
number = int(text_number)
print(a + number)
```

```text
3.0
3
```

> Note: `1 + "2"` raises a `TypeError`; cast `"2"` to an integer before adding.

## 12. Input in Python

- `input()` accepts a value from the keyboard and always returns a string.
- Convert the result with `int()` or `float()` when a number is needed.

```python
name = input()
age = int(input())
price = float(input())
print(name)
print(age)
print(price)
```

```text
Mina
20
19.5
Mina
20
19.5
```

## Let's Practice

### Q1. Write a program to input two numbers and print their sum.

```python
first = int(input())
second = int(input())
print(first + second)
```

```text
4
6
10
```

### Q2. Write a program to input the side of a square and print its area.

```python
side = float(input())
print(side * side)
```

```text
5
25.0
```

### Q3. Write a program to input two floating-point numbers and print their average.

```python
first = float(input())
second = float(input())
print((first + second) / 2)
```

```text
2.5
3.5
3.0
```

### Q4. Input two integers, `a` and `b`. Print `True` if `a` is greater than or equal to `b`; otherwise print `False`.

```python
a = int(input())
b = int(input())
print(a >= b)
```

```text
7
5
True
```
