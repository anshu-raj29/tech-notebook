# Lecture 2: Strings & Conditional Statements

- This lecture covers strings and string operations.
- It also introduces conditional branches with `if`, `elif`, and `else`.

## 1. Strings

- A string stores a sequence of characters.
- Use `+` to combine strings.
- `len()` returns the number of characters.

```python
first = "hello"
second = "world"
combined = first + second
print(combined)
print(len(combined))
```

```text
helloworld
10
```

## 2. Basic Operations

- Concatenation joins strings.
- Include a space explicitly when one is wanted in the result.

```python
first = "hello"
second = "world"
print(first + " " + second)
print(len(first + " " + second))
```

```text
hello world
11
```

## 3. Indexing

- Strings use zero-based indexing; index `0` refers to the first character.
- Strings are immutable.
- An individual character cannot be changed by assigning to an index.

```python
text = "Apna_College"
print(text[0])
print(text[1])
```

```text
A
p
```

> Note: `text[0] = "B"` is not allowed; string items cannot be assigned.

## 4. Slicing

- The slice `text[start:end]` includes `start` and excludes `end`.
- Omitting `start` begins at the start of the string.
- Omitting `end` continues to the end of the string.

```python
text = "ApnaCollege"
print(text[1:4])
print(text[:4])
print(text[1:])
```

```text
pna
Apna
pnaCollege
```

Negative indices count from the end of the string.

## 5. Negative Index

Negative indices count from the end of a string.

```python
text = "Apple"
print(text[-3:-1])
```

```text
pl
```

## 6. String Functions

| Method / function | Purpose | Example |
| --- | --- | --- |
| `endswith(suffix)` | Tests whether a string ends with a suffix | `"coder.".endswith("er.")` |
| `count(substring)` | Counts occurrences of a substring | `"am am".count("am")` |
| `capitalize()` | Capitalizes the first character | `"hello".capitalize()` |
| `find(substring)` | Returns the first matching index, or `-1` | `"hello".find("ll")` |
| `replace(old, new)` | Replaces occurrences of `old` with `new` | `"a a".replace("a", "b")` |

```python
text = "I am a coder."
print(text.endswith("er."))
print(text.count("am"))
print(text.capitalize())
print(text.find("coder"))
print(text.replace("coder", "learner"))
```

```text
True
1
I am a coder.
7
I am a learner.
```

## 7. Conditional Statements

- `if` and `elif` test conditions in order.
- `else` runs when none of the preceding conditions are true.

```python
number = 4
if number % 2 == 0:
    print("even")
else:
    print("odd")
```

```text
even
```

## 8. if-elif-else (SYNTAX)

- Use `if`, `elif`, and `else` to select a conditional branch.

```python
number = 4
if number > 0:
    print("positive")
elif number == 0:
    print("zero")
else:
    print("negative")
```

```text
positive
```

## 9. Conditional Statements

## 10. Grade students based on marks

Assign grades using the mark ranges shown in the lecture.

```python
marks = 85
if marks >= 90:
    grade = "A"
elif marks >= 80:
    grade = "B"
elif marks >= 70:
    grade = "C"
else:
    grade = "D"
print(grade)
```

```text
B
```

> Note: Testing the highest range first keeps each grade range unambiguous.

## Let's Practice

### Q1. Input a first name and print its length.

```python
name = input()
print(len(name))
```

```text
Shradha
7
```

### Q2. Find the number of occurrences of `$` in a string.

```python
text = "Price: $5; tax: $1"
print(text.count("$"))
```

```text
2
```

### Q3. Check whether a number entered by the user is odd or even.

```python
number = int(input())
if number % 2 == 0:
    print("even")
else:
    print("odd")
```

```text
9
odd
```

### Q4. Find the greatest of three numbers entered by the user.

```python
first = int(input())
second = int(input())
third = int(input())
if first >= second and first >= third:
    print(first)
elif second >= third:
    print(second)
else:
    print(third)
```

```text
12
7
9
12
```

### Q5. Check whether a number is a multiple of 7.

```python
number = int(input())
if number % 7 == 0:
    print("multiple of 7")
else:
    print("not a multiple of 7")
```

```text
21
multiple of 7
```
