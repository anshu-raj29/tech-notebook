# Lecture 5: Loops

- Loops repeat instructions.
- Python's `while` and `for` statements can traverse sequences and repeat work.

## 1. Loops in Python

Loops are used to repeat instructions.

## 2. while Loops

- A `while` loop repeats as long as its condition is true.
- An iterator can count how many times the loop runs.

```python
count = 0
while count < 5:
    print("hello")
    count += 1
```

```text
hello
hello
hello
hello
hello
```

```python
count = 1
while count <= 5:
    print(count)
    count += 1
```

```text
1
2
3
4
5
```

## 3. Break & Continue

- `break` terminates a loop.
- `continue` skips the rest of the current iteration and begins the next one.

```python
values = (1, 4, 9, 16, 25)
target = 9
for value in values:
    if value == target:
        print("found", value)
        break
```

```text
found 9
```

```python
for number in range(1, 8):
    if number % 3 == 0:
        continue
    print(number)
```

```text
1
2
4
5
7
```

## 4. Loops in Python

A `for` loop is used for sequential traversal of lists, strings, tuples, and other sequences.

## 5. for Loops

A `for` loop traverses the items of a sequence such as a list, string, or tuple.

```python
values = [1, 4, 9]
for value in values:
    print(value)
```

```text
1
4
9
```

## 6. for Loop with else

- The `else` suite runs when the loop completes normally.
- It does not run if the loop exits with `break`.

```python
for number in (1, 2, 3):
    print(number)
else:
    print("loop completed")
```

```text
1
2
3
loop completed
```

```python
for number in (1, 2, 3):
    if number == 2:
        break
else:
    print("loop completed")
print("finished")
```

```text
finished
```

## 7. range()

- `range()` produces a sequence of numbers.
- It starts at `0` by default.
- It increments by `1` by default.
- It stops before the stop value.

```python
print(list(range(5)))
print(list(range(1, 6)))
print(list(range(2, 11, 2)))
```

```text
[0, 1, 2, 3, 4]
[1, 2, 3, 4, 5]
[2, 4, 6, 8, 10]
```

## 8. pass Statement

- `pass` is a null statement that does nothing.
- It can be used as a placeholder for future code.

```python
for _ in range(3):
    pass
print("loop completed")
```

```text
loop completed
```

## Let's Practice

### Q1. Print the numbers from 1 to 100 using a `while` loop.

```python
number = 1
while number <= 100:
    print(number, end=" ")
    number += 1
print()
```

```text
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
```

### Q2. Print the elements of the given list using a loop.

```python
values = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
for value in values:
    print(value)
```

```text
1
4
9
16
25
36
49
64
81
100
```

### Q3. Print the numbers from 100 to 1.

```python
number = 100
while number >= 1:
    print(number, end=" ")
    number -= 1
print()
```

```text
100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
```

### Q4. Print the multiplication table of an input number `n`.

```python
n = int(input())
for multiplier in range(1, 11):
    print(n * multiplier)
```

```text
3
3
6
9
12
15
18
21
24
27
30
```

### Q5. Search for `x` in the given tuple using a loop.

```python
values = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
x = int(input())
for value in values:
    if value == x:
        print("found", x)
        break
```

```text
25
found 25
```

### Q6. Print the elements of the given list using a `for` loop.

```python
values = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
for value in values:
    print(value)
```

```text
1
4
9
16
25
36
49
64
81
100
```

### Q7. Search for `x` in the given tuple using a `for` loop.

```python
values = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
x = int(input())
for value in values:
    if value == x:
        print("found", x)
        break
```

```text
64
found 64
```

### Q8. Print the numbers from 1 to 100 using `for` and `range()`.

```python
for number in range(1, 101):
    print(number, end=" ")
print()
```

```text
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
```

### Q9. Print the numbers from 100 to 1 using `for` and `range()`.

```python
for number in range(100, 0, -1):
    print(number, end=" ")
print()
```

```text
100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75 74 73 72 71 70 69 68 67 66 65 64 63 62 61 60 59 58 57 56 55 54 53 52 51 50 49 48 47 46 45 44 43 42 41 40 39 38 37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
```

### Q10. Print the multiplication table of `n` using `for` and `range()`.

```python
n = int(input())
for multiplier in range(1, 11):
    print(n * multiplier)
```

```text
4
4
8
12
16
20
24
28
32
36
40
```

### Q11. Find the sum of the first `n` numbers using `while`.

```python
n = int(input())
total = 0
number = 1
while number <= n:
    total += number
    number += 1
print(total)
```

```text
5
15
```

### Q12. Find the factorial of `n` using `for`.

```python
n = int(input())
factorial = 1
for number in range(1, n + 1):
    factorial *= number
print(factorial)
```

```text
5
120
```
