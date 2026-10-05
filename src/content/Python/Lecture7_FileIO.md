# Lecture 7: File I/O

- Python can read from and write to files.
- Open a file before using it.
- Close the file when finished.

## 1. File I/O in Python

- Python can perform operations on files.
- Common operations include reading and writing data.

## 2. Types of all files

- Text files store text; examples include `.txt`, `.docx`, and `.log`.
- Binary files store data; examples include `.mp4`, `.mov`, `.png`, and `.jpeg`.

| Type | Examples |
| --- | --- |
| Text | `.txt`, `.docx`, `.log` |
| Binary | `.mp4`, `.mov`, `.png`, `.jpeg` |

## 3. Open, read & close File

- `open(filename, mode)` opens a file and returns a file object.
- Read the file contents, then close the file.

```python
with open("sample.txt", "w") as file:
    file.write("Hello from a file")

file = open("sample.txt", "r")
data = file.read()
file.close()
print(data)
```

```text
Hello from a file
```

### File modes

| Mode | Operation |
| --- | --- |
| `"r"` | Read |
| `"w"` | Write, replacing existing contents |
| `"a"` | Append to existing contents |

> Note: Opening a file with `"w"` overwrites its existing contents. Use `"a"` to add text at the end.

## 4. Reading a file

- `read()` reads the file contents.
- `readline()` reads one line at a time.

```python
with open("sample.txt", "w") as file:
    file.write("First line\nSecond line\n")

with open("sample.txt", "r") as file:
    print(file.readline().rstrip())
    print(file.read().rstrip())
```

```text
First line
Second line
```

## 5. Writing to a file

- Use `"w"` to replace the file contents.
- Use `"a"` to append to the file contents.

```python
with open("demo.txt", "w") as file:
    file.write("This is a new line\n")

with open("demo.txt", "a") as file:
    file.write("This is an appended line\n")

with open("demo.txt", "r") as file:
    print(file.read(), end="")
```

```text
This is a new line
This is an appended line
```

## 6. with Syntax

- The `with` statement opens a file for a block.
- It closes the file automatically when the block ends.

```python
with open("demo.txt", "a") as file:
    file.write("Another line\n")

with open("demo.txt", "r") as file:
    print(file.read(), end="")
```

```text
This is a new line
This is an appended line
Another line
```

## 7. Deleting a File

- Modules are files containing code that can be used by another program.
- The `os` module provides `remove()` to delete a file.

```python
import os

with open("temporary.txt", "w") as file:
    file.write("temporary data")

os.remove("temporary.txt")
print("temporary.txt deleted")
```

```text
temporary.txt deleted
```

## Let's Practice

### Q1. Create `practice.txt` with the given text.

```python
text = (
    "Hi everyone\n"
    "we are learning File I/O\n"
    "using Java.\n"
    "I like programming in Java.\n"
)
with open("practice.txt", "w") as file:
    file.write(text)

with open("practice.txt", "r") as file:
    print(file.read(), end="")
```

```text
Hi everyone
we are learning File I/O
using Java.
I like programming in Java.
```

### Q2. Write a function that replaces every occurrence of `java` with `python` in the file.

```python
def replace_java_with_python():
    with open("practice.txt", "r") as file:
        text = file.read()
    text = text.replace("Java", "Python").replace("java", "python")
    with open("practice.txt", "w") as file:
        file.write(text)


replace_java_with_python()
with open("practice.txt", "r") as file:
    print(file.read(), end="")
```

```text
Hi everyone
we are learning File I/O
using Python.
I like programming in Python.
```

### Q3. Search whether the word `learning` exists in the file.

```python
with open("practice.txt", "r") as file:
    contents = file.read()
print("learning" in contents)
```

```text
True
```

### Q4. Count the even numbers in a file containing comma-separated numbers.

```python
with open("numbers.txt", "w") as file:
    file.write("1,2,3,4,5,6")

with open("numbers.txt", "r") as file:
    numbers = [int(value) for value in file.read().split(",")]

print(sum(number % 2 == 0 for number in numbers))
```

```text
3
```

### Q5. Find the first line containing `learning`; print `-1` if it is not found.

```python
with open("practice.txt", "r") as file:
    for line_number, line in enumerate(file, start=1):
        if "learning" in line:
            print(line_number)
            break
    else:
        print(-1)
```

```text
2
```
