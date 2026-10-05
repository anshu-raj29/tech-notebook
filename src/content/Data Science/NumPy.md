# NumPy

### What is NumPy?

NumPy stands for **Numerical Python**. It is a library used for numerical calculations and for solving complex scientific problems.

### Why NumPy?

- Python lists are slower and use more memory for large calculations.
- NumPy arrays (`ndarray`) are faster and more memory-efficient than Python lists.
- NumPy supports **vectorized operations**, so mathematical operations can be applied to entire arrays without explicit loops.
- NumPy provides powerful functions for linear algebra, statistics, and random number generation.

```python
import numpy as np
```

---

## 1. Creating NumPy Arrays

### `np.array()` — 1D Array

- Creates an array from a Python list.
- A 1D array stores values in a single row.

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr)
```

```text
[1 2 3 4 5]
```

### `np.array()` — 2D Array

- Creates an array from a list of lists.
- A 2D array stores values in rows and columns.

```python
arr = np.array([[1, 2], [3, 4]])
print(arr)
```

```text
[[1 2]
 [3 4]]
```

### `np.zeros()`

- Creates an array filled with `0`s.
- The argument `(3, 3)` is the shape (rows, columns).

```python
arr = np.zeros((3, 3))
print(arr)
```

```text
[[0. 0. 0.]
 [0. 0. 0.]
 [0. 0. 0.]]
```

### `np.ones()`

- Creates an array filled with `1`s.
- The argument `(2, 4)` is the shape (rows, columns).

```python
arr = np.ones((2, 4))
print(arr)
```

```text
[[1. 1. 1. 1.]
 [1. 1. 1. 1.]]
```

### `np.eye()`

Creates an identity matrix, with `1`s on the main diagonal and `0`s elsewhere.

```python
arr = np.eye(3)
print(arr)
```

```text
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
```

### `np.arange()`

- Generates values from `start` up to, but **not including**, `stop`.
- Syntax: `np.arange(start, stop, step)`

```python
arr = np.arange(0, 10, 2)
print(arr)
```

```text
[0 2 4 6 8]
```

### `np.linspace()`

- Generates `num` evenly spaced values between `start` and `stop`.
- Unlike `np.arange()`, the `stop` value is **included**.
- Syntax: `np.linspace(start, stop, num)`

```python
arr = np.linspace(0, 1, 5)
print(arr)
```

```text
[0.   0.25 0.5  0.75 1.  ]
```

---

## 2. Array Attributes

### `shape`

- Returns the size of the array along each dimension.
- For a 2D array, this is `(rows, columns)`.

```python
arr = np.array([[1, 2], [3, 4]])
print(arr.shape)
```

```text
(2, 2)
```

### `ndim`

Returns the number of dimensions (axes) of the array.

```python
arr = np.array([[1, 2], [3, 4]])
print(arr.ndim)
```

```text
2
```

### `dtype`

Returns the data type of the elements in the array.

```python
arr = np.array([[1, 2], [3, 4]])
print(arr.dtype)
```

```text
int64
```

---

## 3. Indexing & Slicing

### Indexing — First Element

- Indexing accesses a single element.
- Python uses **zero-based indexing**, so the first element has index `0`.

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr[0])
```

```text
1
```

### Indexing — Last Element

A negative index counts from the end. `-1` refers to the last element.

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr[-1])
```

```text
5
```

### Slicing — 1D Array

- Accesses a range of elements.
- In `arr[start:stop]`, `start` is included and `stop` is excluded.

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr[1:4])
```

```text
[2 3 4]
```

### Indexing — 2D Array

Accesses an element using `[row, column]`.

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr[0, 1])
```

```text
2
```

### Selecting a Column

`arr[:, 1]` selects all rows from column `1`.

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr[:, 1])
```

```text
[2 5]
```

### Selecting a Row

`arr[1, :]` selects all columns from row `1`.

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr[1, :])
```

```text
[4 5 6]
```

---

## 4. Array Operations

NumPy performs arithmetic operations **element-wise** on arrays of compatible shapes.

### Addition (`+`)

Adds corresponding elements of two arrays.

```python
arr = np.array([1, 2, 3, 4, 5])
other = np.array([6, 7, 8, 9, 10])
print(arr + other)
```

```text
[ 7  9 11 13 15]
```

### Multiplication (`*`)

Multiplies corresponding elements of two arrays.

```python
arr = np.array([1, 2, 3, 4, 5])
other = np.array([6, 7, 8, 9, 10])
print(arr * other)
```

```text
[ 6 14 24 36 50]
```

### Power (`**`)

Raises each element to the given power.

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr ** 2)
```

```text
[ 1  4  9 16 25]
```

### `np.sin()`

- Calculates the sine of each element.
- Values are interpreted in **radians**.

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.sin(arr))
```

```text
[ 0.84147098  0.90929743  0.14112001 -0.7568025  -0.95892427]
```

---

## 5. Reshaping & Manipulation

### `reshape()`

- Changes the shape of an array without changing its data.
- The total number of elements must stay the same.

```python
arr = np.arange(1, 13)
print(arr.reshape(3, 4))
```

```text
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
```

### `flatten()`

Converts a multi-dimensional array into a 1D array.

```python
arr = np.arange(1, 13).reshape(3, 4)
print(arr.flatten())
```

```text
[ 1  2  3  4  5  6  7  8  9 10 11 12]
```

### `.T`

- Returns the transpose of an array.
- For a 2D array, rows and columns are swapped.

```python
arr = np.arange(1, 13).reshape(3, 4)
print(arr.T)
```

```text
[[ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]
 [ 4  8 12]]
```

### `np.concatenate()`

Joins two or more arrays along an existing axis.

```python
arr = np.array([1, 2, 3, 4, 5])
other = np.array([6, 7, 8, 9, 10])
print(np.concatenate((arr, other)))
```

```text
[ 1  2  3  4  5  6  7  8  9 10]
```

---

## 6. Statistical Functions

### `np.mean()`

Calculates the arithmetic mean (average).

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.mean(arr))
```

```text
3.0
```

### `np.median()`

Calculates the median (middle value).

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.median(arr))
```

```text
3.0
```

### `np.std()`

Calculates the standard deviation, which measures how spread out the values are.

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.std(arr))
```

```text
1.4142135623730951
```

### `np.sum()`

Calculates the sum of all elements.

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.sum(arr))
```

```text
15
```

### `np.min()`

Returns the smallest value.

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.min(arr))
```

```text
1
```

### `np.max()`

Returns the largest value.

```python
arr = np.array([1, 2, 3, 4, 5])
print(np.max(arr))
```

```text
5
```

---

## 7. Boolean Masking & Fancy Indexing

### Boolean Mask

A condition applied to an array returns a Boolean array (`True` or `False` for each element).

```python
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 3
print(mask)
```

```text
[False False False  True  True]
```

### Selecting with a Boolean Mask

Using the mask as an index returns only the elements where the mask is `True`.

```python
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 3
print(arr[mask])
```

```text
[4 5]
```

### Fancy Indexing

Selects specific elements by passing a list of indices.

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr[[0, 2, 4]])
```

```text
[1 3 5]
```

---

## 8. Random Numbers

> - `np.random.seed(42)` fixes the random sequence so the output is the same every time.
> - Without it, the values change on every run.

### `np.random.rand()`

Generates random floats from a uniform distribution over `[0, 1)`.

```python
np.random.seed(42)
arr = np.random.rand(5)
print(arr)
```

```text
[0.37454012 0.95071431 0.73199394 0.59865848 0.15601864]
```

### `np.random.randint()`

- Generates random integers.
- The lower bound is included and the upper bound is excluded, so the example below produces integers from `1` to `9`.
- Syntax: `np.random.randint(low, high, size)`

```python
np.random.seed(42)
arr = np.random.randint(1, 10, 5)
print(arr)
```

```text
[7 4 8 5 7]
```

### `np.random.randn()`

Generates random values from the **standard normal distribution** (mean `0`, standard deviation `1`).

```python
np.random.seed(42)
arr = np.random.randn(5)
print(arr)
```

```text
[ 0.49671415 -0.1382643   0.64768854  1.52302986 -0.23415337]
```

---

## 9. Linear Algebra

### `np.dot()`

- Calculates the dot product.
- For two 2D arrays, it performs matrix multiplication.

```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B))
```

```text
[[19 22]
 [43 50]]
```

### `np.linalg.det()`

Calculates the determinant of a square matrix.

```python
A = np.array([[1, 2], [3, 4]])
print(np.linalg.det(A))
```

```text
-2.0000000000000004
```

- The exact determinant is `-2`.
- The tiny difference comes from floating-point arithmetic.

### `np.linalg.inv()`

- Calculates the inverse of a square matrix.
- The matrix must be invertible.

```python
A = np.array([[1, 2], [3, 4]])
print(np.linalg.inv(A))
```

```text
[[-2.   1. ]
 [ 1.5 -0.5]]
```

---

## 10. Broadcasting

### Broadcasting

- Allows arithmetic between arrays of different shapes when their dimensions are compatible.
- Here, the 1D array `B` is applied to each row of `A`.

```python
A = np.array([[1, 2, 3],
              [4, 5, 6]])
B = np.array([1, 0, 1])
print(A + B)
```

```text
[[2 2 4]
 [5 5 7]]
```

---

## 11. File I/O

### `np.save()`

- Saves an array to a binary `.npy` file.
- It produces no printed output.

```python
arr = np.array([1, 2, 3, 4, 5])
np.save("arr.npy", arr)
```

### `np.load()`

Loads an array from a `.npy` file.

```python
arr = np.load("arr.npy")
print(arr)
```

```text
[1 2 3 4 5]
```