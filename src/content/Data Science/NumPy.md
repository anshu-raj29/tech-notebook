# NumPy

## What is NumPy?

NumPy stands for **Numerical Python**.

It is a library used for **numerical calculations** and solving complex scientific problems.

## Why NumPy?

- Python lists are slower and use more memory for large calculations.
- NumPy arrays (`ndarray`) are faster and more memory-efficient than Python lists.
- NumPy supports **vectorized operations**, meaning mathematical operations can be performed on entire arrays without explicitly using loops.
- NumPy provides powerful functions for:
  - Linear algebra
  - Statistics
  - Random number generation

```python
import numpy as np
```

---

# 1. Creating NumPy Arrays

### 1D Array

A 1D array stores numbers in a single row.

```python
arr = np.array([1, 2, 3, 4])

print("1D Array:", arr)
```

**Output:**

```text
1D Array: [1 2 3 4]
```

### 2D Array

A 2D array stores numbers in rows and columns.

```python
arr = np.array([[1, 2], [3, 4]])

print("2D Array:", arr)
```

**Output:**

```text
2D Array:
[[1 2]
 [3 4]]
```

### Zeros Matrix

`np.zeros()` creates an array filled with `0`s.

Here, `(3, 3)` creates a 3 × 3 matrix.

```python
arr = np.zeros((3, 3))

print("Zeros:", arr)
```

**Output:**

```text
Zeros:
[[0. 0. 0.]
 [0. 0. 0.]
 [0. 0. 0.]]
```

### Ones Matrix

`np.ones()` creates an array filled with `1`s.

Here, `(2, 4)` creates a 2 × 4 matrix.

```python
arr = np.ones((2, 4))

print("Ones:", arr)
```

**Output:**

```text
Ones:
[[1. 1. 1. 1.]
 [1. 1. 1. 1.]]
```

### Identity Matrix

`np.eye()` creates a square identity matrix with `1`s on the main diagonal and `0`s elsewhere.

```python
arr = np.eye(3)

print("Identity Matrix:", arr)
```

**Output:**

```text
Identity Matrix:
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]
```

### `np.arange()`

`np.arange(start, stop, step)` generates values starting from `start` and continues up to, but **not including**, `stop`.

```python
arr = np.arange(0, 10, 2)

print("Arange:", arr)
```

**Output:**

```text
Arange: [0 2 4 6 8]
```

### `np.linspace()`

`np.linspace(start, stop, num)` generates `num` evenly spaced values between `start` and `stop`.

Unlike `np.arange()`, the `stop` value is included by default.

```python
arr = np.linspace(0, 1, 5)

print("Linspace:", arr)
```

**Output:**

```text
Linspace: [0.   0.25 0.5  0.75 1.  ]
```

---

# 2. Array Attributes

### `shape`

The `shape` attribute returns the size of an array along each dimension.

For a 2D array, it returns the number of rows and columns.

```python
arr = np.array([[1, 2], [3, 4]])

print("Shape:", arr.shape)
```

**Output:**

```text
Shape: (2, 2)
```

### `ndim`

The `ndim` attribute returns the number of dimensions, also called axes, of an array.

Examples include:

- 1D array
- 2D array
- 3D array

```python
arr = np.array([[1, 2], [3, 4]])

print("Number of dimensions:", arr.ndim)
```

**Output:**

```text
Number of dimensions: 2
```

### `dtype`

The `dtype` attribute returns the data type of the elements in an array.

```python
arr = np.array([[1, 2], [3, 4]])

print("Data type:", arr.dtype)
```

**Output:**

```text
Data type: int64
```

---

# 3. Indexing & Slicing

### Indexing in a 1D Array

Indexing is used to access individual elements of an array.

Python uses **zero-based indexing**, so the first element has index `0`.

```python
arr = np.array([10, 20, 30, 40, 50])

print("First index:", arr[0])
print("Last index:", arr[-1])
```

**Output:**

```text
First index: 10
Last index: 50
```

### Slicing a 1D Array

Slicing is used to access a range of elements.

The syntax `arr[start:stop]` includes `start` but excludes `stop`.

```python
arr = np.array([10, 20, 30, 40, 50])

print("Slice 1:4:", arr[1:4])
```

**Output:**

```text
Slice 1:4: [20 30 40]
```

### Indexing a 2D Array

A 2D array can be accessed using `[row, column]`.

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print("Element at row 0, col 1:", arr[0, 1])
```

**Output:**

```text
Element at row 0, col 1: 2
```

### Selecting a Column from a 2D Array

The expression `arr[:, 1]` selects all rows from column `1`.

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print("All rows, col 1:", arr[:, 1])
```

**Output:**

```text
All rows, col 1: [2 5]
```

### Selecting a Row from a 2D Array

The expression `arr[1, :]` selects all columns from row `1`.

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print("Row 1:", arr[1, :])
```

**Output:**

```text
Row 1: [4 5 6]
```

---

# 4. Array Operations

### Array Addition

NumPy performs arithmetic operations element-wise on arrays of compatible shapes.

```python
arr = np.array([1, 2, 3])
other = np.array([4, 5, 6])

print("Addition:", arr + other)
```

**Output:**

```text
Addition: [5 7 9]
```

### Array Multiplication

The `*` operator performs element-wise multiplication between NumPy arrays.

```python
arr = np.array([1, 2, 3])
other = np.array([4, 5, 6])

print("Multiplication:", arr * other)
```

**Output:**

```text
Multiplication: [ 4 10 18]
```

### Squaring Array Elements

The `**` operator can be used to raise each element of an array to a power.

```python
arr = np.array([1, 2, 3])

print("Square:", arr ** 2)
```

**Output:**

```text
Square: [1 4 9]
```

### `np.sin()`

`np.sin()` calculates the sine of each element in the array.

The values are interpreted in **radians**.

```python
arr = np.array([1, 2, 3])

print("Sine:", np.sin(arr))
```

**Output:**

```text
Sine: [0.84147098 0.90929743 0.14112001]
```

---

# 5. Reshaping & Manipulation

### `reshape()`

`reshape()` changes the shape of an array without changing its data.

```python
arr = np.arange(1, 13)

arr = arr.reshape(3, 4)

print("Reshaped 3x4:", arr)
```

**Output:**

```text
Reshaped 3x4:
[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
```

### `flatten()`

`flatten()` converts a multi-dimensional array into a 1D array.

```python
arr = np.arange(1, 13).reshape(3, 4)

print("Flattened:", arr.flatten())
```

**Output:**

```text
Flattened:
[ 1  2  3  4  5  6  7  8  9 10 11 12]
```

### `.T` — Transpose

`.T` returns the transpose of an array.

For a 2D array, it flips the rows and columns.

```python
arr = np.arange(1, 13).reshape(3, 4)

print("Transposed:", arr.T)
```

**Output:**

```text
Transposed:
[[ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]
 [ 4  8 12]]
```

### `np.concatenate()`

`np.concatenate()` combines two or more arrays along an existing axis.

```python
arr = np.array([1, 2, 3])
other = np.array([4, 5, 6])

print("Concatenate arrays:", np.concatenate((arr, other)))
```

**Output:**

```text
Concatenate arrays: [1 2 3 4 5 6]
```

---

# 6. Statistical Functions

### `np.mean()`

`np.mean()` calculates the arithmetic mean (average) of the elements in an array.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Mean:", np.mean(arr))
```

**Output:**

```text
Mean: 3.0
```

### `np.median()`

`np.median()` calculates the median value of the elements in an array.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Median:", np.median(arr))
```

**Output:**

```text
Median: 3.0
```

### `np.std()`

`np.std()` calculates the standard deviation of the elements in an array.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Standard Deviation:", np.std(arr))
```

**Output:**

```text
Standard Deviation: 1.4142135623730951
```

### `np.sum()`

`np.sum()` calculates the sum of the elements in an array.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Sum:", np.sum(arr))
```

**Output:**

```text
Sum: 15
```

### `np.min()`

`np.min()` returns the minimum value in an array.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Min:", np.min(arr))
```

**Output:**

```text
Min: 1
```

### `np.max()`

`np.max()` returns the maximum value in an array.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Max:", np.max(arr))
```

**Output:**

```text
Max: 5
```

---

# 7. Boolean Masking & Fancy Indexing

### Boolean Masking

Boolean masking selects elements from an array based on a condition.

```python
arr = np.array([1, 2, 3, 4, 5])

mask = arr > 3

print("Boolean Mask:", mask)
```

**Output:**

```text
Boolean Mask: [False False False  True  True]
```

### Selecting Elements Using Boolean Masking

A Boolean mask can be used to select only the elements that satisfy a condition.

```python
arr = np.array([1, 2, 3, 4, 5])

mask = arr > 3

print("Elements > 3:", arr[mask])
```

**Output:**

```text
Elements > 3: [4 5]
```

### Fancy Indexing

Fancy indexing selects specific elements using their indices.

```python
arr = np.array([1, 2, 3, 4, 5])

print("Fancy Indexing:", arr[[0, 2, 4]])
```

**Output:**

```text
Fancy Indexing: [1 3 5]
```

---

# 8. Random Numbers

### `np.random.rand()`

`np.random.rand()` generates random floating-point numbers from a uniform distribution over the interval `[0, 1)`.

```python
arr = np.random.rand(5)

print("Random floats:", arr)
```

**Example Output:**

```text
Random floats: [0.37454012 0.95071431 0.73199394 0.59865848 0.15601864]
```

> **Note:** Random output can change each time the code is executed.

### `np.random.randint()`

`np.random.randint()` generates random integers from a specified range.

The lower bound is included and the upper bound is excluded.

```python
arr = np.random.randint(1, 10, 5)

print("Random integers:", arr)
```

**Example Output:**

```text
Random integers: [4 7 2 9 1]
```

> Here, the possible integers are from `1` to `9`. The upper limit `10` is excluded.

> **Note:** Random output can change each time the code is executed.

### `np.random.randn()`

`np.random.randn()` generates random values from a **standard normal distribution** with mean `0` and standard deviation `1`.

```python
arr = np.random.randn(5)

print("Random normal:", arr)
```

**Example Output:**

```text
Random normal: [-0.10321885  0.4105985   0.14404357  1.45427351  0.76103773]
```

> **Note:** Random output can change each time the code is executed.

---

# 9. Linear Algebra

### `np.dot()`

`np.dot()` calculates the dot product. For two 2D arrays, it performs matrix multiplication.

```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

print("Matrix Multiplication:", np.dot(A, B))
```

**Output:**

```text
Matrix Multiplication:
[[19 22]
 [43 50]]
```

### `np.linalg.det()`

`np.linalg.det()` calculates the determinant of a square matrix.

```python
A = np.array([[1, 2], [3, 4]])

print("Determinant:", np.linalg.det(A))
```

**Output:**

```text
Determinant: -2.0
```

### `np.linalg.inv()`

`np.linalg.inv()` calculates the inverse of a square matrix, provided the matrix is invertible.

```python
A = np.array([[1, 2], [3, 4]])

print("Inverse:
", np.linalg.inv(A))
```

**Output:**

```text
Inverse:
[[-2.   1. ]
 [ 1.5 -0.5]]
```

---

# 10. Broadcasting

### Broadcasting

Broadcasting allows arithmetic operations between arrays of different shapes when their dimensions are compatible.

```python
A = np.array([[1, 2, 3],
              [4, 5, 6]])

B = np.array([1, 0, 1])

print("Broadcasting A+B:", A + B)
```

**Output:**

```text
Broadcasting A+B:
[[2 2 4]
 [5 5 7]]
```

Here, the 1D array `B` is automatically applied to each row of `A`.

---

# 11. File I/O

### `np.save()`

`np.save()` saves a NumPy array to a binary `.npy` file.

```python
arr = np.array([1, 2, 3, 4, 5])

np.save("arr.npy", arr)
```

The file `arr.npy` stores the NumPy array in NumPy's binary format.

### `np.load()`

`np.load()` loads a previously saved NumPy array from a file.

```python
arr = np.load("arr.npy")

print("Loaded array:", arr)
```

**Output:**

```text
Loaded array: [1 2 3 4 5]
```
