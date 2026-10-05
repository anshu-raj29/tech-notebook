# Lecture 4: Dictionaries & Sets

- Dictionaries store key-value pairs.
- Sets store unique values.

## 1. Dictionary in Python

- A dictionary stores values in key-value pairs.
- A dictionary is mutable.
- Dictionary keys are unique.

```python
student = {"name": "Asha", "cgpa": 3.8, "marks": 92}
print(student["name"])
print(student["cgpa"])
student["marks"] = 95
student["city"] = "Delhi"
print(student)
```

```text
Asha
3.8
{'name': 'Asha', 'cgpa': 3.8, 'marks': 95, 'city': 'Delhi'}
```

## 2. Dictionary in Python

Dictionary values can themselves be dictionaries.

## 3. Nested Dictionaries

A dictionary value can itself be another dictionary.

```python
student = {
    "name": "Asha",
    "score": {"math": 95, "science": 88},
}
print(student["score"]["math"])
```

```text
95
```

## 4. Dictionary Methods

| Method | Purpose |
| --- | --- |
| `keys()` | Returns the dictionary's keys |
| `values()` | Returns its values |
| `items()` | Returns key-value pairs |
| `get(key)` | Gets the value for a key |
| `update(other)` | Adds or updates items from another mapping |

```python
student = {"name": "Asha", "marks": 92}
print(list(student.keys()))
print(list(student.values()))
print(list(student.items()))
print(student.get("name"))
student.update({"city": "Delhi"})
print(student)
```

```text
['name', 'marks']
['Asha', 92]
[('name', 'Asha'), ('marks', 92)]
Asha
{'name': 'Asha', 'marks': 92, 'city': 'Delhi'}
```

## 5. Set in Python

- A set is an unordered collection of unique, immutable elements.
- Repeated values are stored only once.
- Use `set()` to create an empty set.

```python
empty_set = set()
numbers = {1, 2, 3, 4}
duplicates = {1, 2, 2, 2}
print(empty_set)
print(numbers)
print(duplicates)
```

```text
set()
{1, 2, 3, 4}
{1, 2}
```

## 6. Set Methods

| Method | Purpose |
| --- | --- |
| `add(value)` | Adds an element |
| `remove(value)` | Removes an element; raises `KeyError` if missing |
| `clear()` | Empties the set |
| `pop()` | Removes and returns an arbitrary element |

```python
numbers = {1, 2}
numbers.add(3)
print(sorted(numbers))
numbers.remove(2)
print(sorted(numbers))
```

```text
[1, 2, 3]
[1, 3]
```

> Note: Sets have no guaranteed order. The examples sort the values before displaying them.

## 7. Set Methods

- `union()` combines set values and returns a new set.
- `intersection()` returns a new set with values common to both sets.

| Method | Purpose |
| --- | --- |
| `union(other)` | Returns elements from either set |
| `intersection(other)` | Returns elements common to both sets |

```python
first = {1, 2, 3}
second = {2, 3, 4}
print(sorted(first.union(second)))
print(sorted(first.intersection(second)))
```

```text
[1, 2, 3, 4]
[2, 3]
```

## Let's Practice

### Q1. Store the given word meanings in a dictionary.

```python
meanings = {
    "table": "a piece of furniture",
    "list": "a collection of facts and figures",
    "cat": "a small animal",
}
print(meanings)
```

```text
{'table': 'a piece of furniture', 'list': 'a collection of facts and figures', 'cat': 'a small animal'}
```

### Q2. Given the students' subjects, determine how many classrooms are needed if one classroom is required per subject.

```python
subjects = ["python", "java", "C++", "python", "javascript",
            "java", "python", "java", "C++", "C"]
print(len(set(subjects)))
```

```text
5
```

### Q3. Enter marks for three subjects and store each subject and mark in an initially empty dictionary.

```python
marks = {}
for subject in ("Math", "Science", "English"):
    marks[subject] = int(input())
print(marks)
```

```text
95
88
91
{'Math': 95, 'Science': 88, 'English': 91}
```

### Q4. Store `9` and `9.0` as separate values in a set.

- Python considers `9` and `9.0` equal.
- Tag each value with its type to store them as separate set values.

```python
values = {("int", 9), ("float", 9.0)}
print(sorted(values))
```

```text
[('float', 9.0), ('int', 9)]
```
