# Pandas

## What is Pandas?

Pandas is a library used for working with datasets.

It provides functions to:

- Analyze data
- Clean data
- Explore data
- Manipulate data

## It mainly works with

- **Series** → A 1D labelled array. When placed inside a DataFrame, it behaves like one column of data.
- **DataFrame** → A 2D table of data, made up of multiple Series (columns).

## Installation

Install Pandas using:

```bash
pip install pandas
```

## Import

```python
import pandas as pd
import numpy as np
```

---

# 1. Series

A Series is a 1D labelled array.

## Default Syntax of `pd.Series()`

The general syntax of `pd.Series()` can be represented as:

```python
pd.Series(
    data=None,    # the actual values (list, array, dict, scalar, etc.)
    index=None,   # row labels (default: 0, 1, 2, ...)
    dtype=None,   # force convert to a data type
    name=None,    # optional name for the Series
    copy=False    # make a copy of data or not
)
```

## Creating a Series

A Series can be created by providing values, custom row labels, a data type, and a name.

```python
s = pd.Series(
    data=[10, 20, 30, np.nan, 20, 10, 40],
    index=["A", "B", "C", "D", "E", "F", "G"],
    dtype="float",
    name="Marks",
    copy=False
)

print(s)
```

**Output:**

```text
A    10.0
B    20.0
C    30.0
D     NaN
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

---

# 2. Basic Information

## `head()`

`head()` returns the first 5 values of a Series by default.

```python
print("First 5 values (default):\n", s.head())
```

**Output:**

```text
First 5 values (default):
 A    10.0
B    20.0
C    30.0
D     NaN
E    20.0
Name: Marks, dtype: float64
```

## `head(n)`

`head(n)` returns the first `n` values.

```python
print("First 3 values:\n", s.head(3))
```

**Output:**

```text
First 3 values:
 A    10.0
B    20.0
C    30.0
Name: Marks, dtype: float64
```

## `tail()`

`tail()` returns the last 5 values of a Series by default.

```python
print("Last 5 values (default):\n", s.tail())
```

**Output:**

```text
Last 5 values (default):
 C    30.0
D     NaN
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

## `tail(n)`

`tail(n)` returns the last `n` values.

```python
print("Last 2 values:\n", s.tail(2))
```

**Output:**

```text
Last 2 values:
 F    10.0
G    40.0
Name: Marks, dtype: float64
```

## `index`

The `index` attribute returns the row labels of the Series as a Pandas Index object.

```python
print("Row labels (index object):", s.index)
```

**Output:**

```text
Row labels (index object): Index(['A', 'B', 'C', 'D', 'E', 'F', 'G'], dtype='object')
```

## `index.tolist()`

`index.tolist()` converts the row labels into a Python list.

```python
print("Row labels (index --> Python list):", s.index.tolist())
```

**Output:**

```text
Row labels (index --> Python list): ['A', 'B', 'C', 'D', 'E', 'F', 'G']
```

## `values`

The `values` attribute returns the values of the Series as a NumPy array.

```python
print("Values only (NumPy array --> spaces):", s.values)
```

**Output:**

```text
Values only (NumPy array --> spaces): [10. 20. 30. nan 20. 10. 40.]
```

## `values.tolist()`

`values.tolist()` converts the Series values into a Python list.

```python
print("Values only (Python list --> commas):", s.values.tolist())
```

**Output:**

```text
Values only (Python list --> commas): [10.0, 20.0, 30.0, nan, 20.0, 10.0, 40.0]
```

---

# 3. Math / Statistics

## `sum()`

`sum()` calculates the sum of the values in the Series. By default, missing values (`NaN`) are ignored.

```python
print("Sum (ignores NaN):", s.sum())
```

**Output:**

```text
Sum (ignores NaN): 130.0
```

## `mean()`

`mean()` calculates the average of the values in the Series. By default, `NaN` values are ignored.

```python
print("Mean (average):", s.mean())
```

**Output:**

```text
Mean (average): 21.666666666666668
```

## `max()`

`max()` returns the maximum value in the Series.

```python
print("Maximum:", s.max())
```

**Output:**

```text
Maximum: 40.0
```

## `min()`

`min()` returns the minimum value in the Series.

```python
print("Minimum:", s.min())
```

**Output:**

```text
Minimum: 10.0
```

## `std()`

`std()` calculates the standard deviation of the values in the Series.

```python
print("Standard Deviation:", s.std())
```

**Output:**

```text
Standard Deviation: 11.547005383792516
```

---

# 4. Selection

## Selecting the First Value

A Series can be accessed using positional indexing.

```python
print("First value:", s[0])
```

**Output:**

```text
First value: 10.0
```

## Slicing

Slicing can be used to select a range of values.

```python
print("Slice values (s[1:3]):\n", s[1:3])
```

**Output:**

```text
Slice values (s[1:3]):
 B    20.0
C    30.0
Name: Marks, dtype: float64
```

## `loc[]`

`.loc[]` is used to select data by its label.

```python
print("Select by label (s.loc['C']):", s.loc["C"])
```

**Output:**

```text
Select by label (s.loc['C']): 30.0
```

## `iloc[]`

`.iloc[]` is used to select data by its integer position.

```python
print("Select by position (s.iloc[2]):", s.iloc[2])
```

**Output:**

```text
Select by position (s.iloc[2]): 30.0
```

---

# 5. Cleaning

## `dropna()`

`dropna()` removes missing (`NaN`) values from the Series.

```python
print("Remove missing (NaN) values:", s.dropna())
```

**Output:**

```text
Remove missing (NaN) values:
A    10.0
B    20.0
C    30.0
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

## `fillna()`

`fillna()` replaces missing (`NaN`) values with a specified value.

```python
print("Fill missing (NaN) with 0:", s.fillna(0))
```

**Output:**

```text
Fill missing (NaN) with 0:
A    10.0
B    20.0
C    30.0
D     0.0
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

## `replace()`

`replace()` replaces specified values with another value.

```python
print("Replace 10 with 99:", s.replace(10, 99))
```

**Output:**

```text
Replace 10 with 99:
A    99.0
B    20.0
C    30.0
D     NaN
E    20.0
F    99.0
G    40.0
Name: Marks, dtype: float64
```

---

# 6. Other Useful Functions

## `value_counts()`

`value_counts()` counts how frequently each value appears in the Series.

By default, missing values are not included.

```python
print("Frequency of each value:", s.value_counts())
```

**Output:**

```text
Frequency of each value:
20.0    2
10.0    2
30.0    1
40.0    1
Name: count, dtype: int64
```

## `unique()`

`unique()` returns the unique values present in the Series.

```python
print("Unique values:", s.unique())
```

**Output:**

```text
Unique values: [10. 20. 30. nan 40.]
```

## `sort_values()`

`sort_values()` sorts the values of the Series in ascending order by default.

```python
print("Sorted values:", s.sort_values())
```

**Output:**

```text
Sorted values:
A    10.0
F    10.0
B    20.0
E    20.0
C    30.0
G    40.0
D     NaN
Name: Marks, dtype: float64
```