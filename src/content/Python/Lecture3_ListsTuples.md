# Lecture 3: Lists & Tuples

- Lists and tuples store sequences of values.
- Lists can be changed; tuples cannot.

## 1. Lists in Python

- A list stores a sequence of values.
- A list can contain values of different types.
- Lists are mutable.
- `len()` returns the number of items.

```python
marks = [87, 64, 33, 95, 76]
student = ["Karan", 85, "Delhi"]
student[0] = "Arjun"
print(marks[0], marks[1])
print(student)
print(len(student))
```

```text
87 64
['Arjun', 85, 'Delhi']
3
```

## 2. List Slicing

List slicing follows the same start-inclusive, end-exclusive rule as string slicing.

```python
marks = [87, 64, 33, 95, 76]
print(marks[1:4])
print(marks[:4])
print(marks[1:])
print(marks[-3:-1])
```

```text
[64, 33, 95]
[87, 64, 33, 95]
[64, 33, 95, 76]
[33, 95]
```

## 3. List Methods

| Method | Purpose |
| --- | --- |
| `append(value)` | Adds one item at the end |
| `insert(index, value)` | Inserts an item at an index |
| `sort()` | Sorts in ascending order |
| `sort(reverse=True)` | Sorts in descending order |
| `reverse()` | Reverses the list in place |

```python
items = [2, 1, 3]
items.append(4)
print(items)
items.insert(1, 8)
print(items)
items.sort()
print(items)
items.sort(reverse=True)
print(items)
items.reverse()
print(items)
```

```text
[2, 1, 3, 4]
[2, 8, 1, 3, 4]
[1, 2, 3, 4, 8]
[8, 4, 3, 2, 1]
[1, 2, 3, 4, 8]
```

## 4. List Methods

- `remove()` removes the first occurrence of an item.
- `pop(index)` removes and returns the item at the given index.

| Method | Purpose |
| --- | --- |
| `remove(value)` | Removes the first matching item |
| `pop(index)` | Removes and returns the item at an index |

```python
items = [2, 1, 3, 1]
items.remove(1)
print(items)
removed = items.pop(1)
print(removed)
print(items)
```

```text
[2, 3, 1]
3
[2, 1]
```

## 5. Tuples in Python

- A tuple is an immutable sequence of values.
- A one-item tuple needs a trailing comma.

```python
marks = (87, 64, 33, 95, 76)
empty = ()
one_item = (1,)
several_items = (1, 2, 3)
print(marks[0], several_items)
print(empty, one_item)
```

```text
87 (1, 2, 3)
() (1,)
```

> Note: `marks[0] = 43` is not allowed because tuples are immutable.

## 6. Tuple Methods

| Method | Purpose |
| --- | --- |
| `count(value)` | Counts occurrences of a value |
| `index(value)` | Returns the index of the first occurrence |

```python
values = (2, 1, 3, 1)
print(values.count(1))
print(values.index(1))
```

```text
2
1
```

## Let's Practice

### Q1. Ask the user to enter the names of three favorite movies and store them in a list.

```python
movies = []
for _ in range(3):
    movies.append(input())
print(movies)
```

```text
Up
Coco
Inside Out
['Up', 'Coco', 'Inside Out']
```

### Q2. Check whether a list is a palindrome. Use a copy of the list.

```python
values = [1, 2, 3, 2, 1]
copy_of_values = values.copy()
copy_of_values.reverse()
print(values == copy_of_values)

values = [1, "abc", "abc", 1]
copy_of_values = values.copy()
copy_of_values.reverse()
print(values == copy_of_values)
```

```text
True
True
```

### Q3. Count the students with grade `A` in the tuple and store the grades in a list sorted from `A` to `D`.

```python
grades = ("C", "D", "A", "A", "B", "B", "A")
print(grades.count("A"))
grade_list = list(grades)
grade_list.sort()
print(grade_list)
```

```text
3
['A', 'A', 'A', 'B', 'B', 'C', 'D']
```
