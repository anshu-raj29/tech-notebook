# Pandas

### What is Pandas?

- Pandas is a library used for working with datasets.
- It provides functions to analyze, clean, explore, and manipulate data.

### What Pandas Mainly Works With

- **Series** → A 1D labelled array. When placed inside a DataFrame, it behaves like one column of data.
- **DataFrame** → A 2D table of data, made up of multiple Series (columns).

### Installation

```bash
pip install pandas
```

### Import

```python
import pandas as pd
import numpy as np
```

---

## 1. Series

A Series is a 1D labelled array.

### Default Syntax of `pd.Series()`

The general syntax of `pd.Series()`.

```python
pd.Series(
    data=None,    # the actual values (list, array, dict, scalar, etc.)
    index=None,   # row labels (default: 0, 1, 2, ...)
    dtype=None,   # force convert to a data type
    name=None,    # optional name for the Series
    copy=False    # make a copy of data or not
)
```

### Creating a Series

- A Series can be created by providing values, custom row labels, a data type, and a name.
- The Series `s` created here is used in all the examples below.

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

## 2. Basic Information

### `head()`

Returns the first 5 values of a Series by default.

```python
print(s.head())
```

```text
A    10.0
B    20.0
C    30.0
D     NaN
E    20.0
Name: Marks, dtype: float64
```

### `head(n)`

Returns the first `n` values.

```python
print(s.head(3))
```

```text
A    10.0
B    20.0
C    30.0
Name: Marks, dtype: float64
```

### `tail()`

Returns the last 5 values of a Series by default.

```python
print(s.tail())
```

```text
C    30.0
D     NaN
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

### `tail(n)`

Returns the last `n` values.

```python
print(s.tail(2))
```

```text
F    10.0
G    40.0
Name: Marks, dtype: float64
```

### `index`

Returns the row labels of the Series as a Pandas Index object.

```python
print(s.index)
```

```text
Index(['A', 'B', 'C', 'D', 'E', 'F', 'G'], dtype='str')
```

### `index.tolist()`

Converts the row labels into a Python list.

```python
print(s.index.tolist())
```

```text
['A', 'B', 'C', 'D', 'E', 'F', 'G']
```

### `values`

Returns the values of the Series as a NumPy array.

```python
print(s.values)
```

```text
[10. 20. 30. nan 20. 10. 40.]
```

### `values.tolist()`

Converts the Series values into a Python list.

```python
print(s.values.tolist())
```

```text
[10.0, 20.0, 30.0, nan, 20.0, 10.0, 40.0]
```

---

## 3. Math / Statistics

### `sum()`

- Calculates the sum of the values in the Series.
- By default, missing values (`NaN`) are ignored.

```python
print(s.sum())
```

```text
130.0
```

### `mean()`

- Calculates the average of the values in the Series.
- By default, `NaN` values are ignored.

```python
print(s.mean())
```

```text
21.666666666666668
```

### `max()`

Returns the maximum value in the Series.

```python
print(s.max())
```

```text
40.0
```

### `min()`

Returns the minimum value in the Series.

```python
print(s.min())
```

```text
10.0
```

### `std()`

Calculates the standard deviation of the values in the Series.

```python
print(s.std())
```

```text
11.690451944500122
```

---

## 4. Selection

### Selecting a Single Value

A single value can be selected using its label.

```python
print(s["A"])
```

```text
10.0
```

### Slicing

- Slicing selects a range of values by position.
- In `s[start:stop]`, `start` is included and `stop` is excluded.

```python
print(s[1:3])
```

```text
B    20.0
C    30.0
Name: Marks, dtype: float64
```

### `loc[]`

Selects data by its label.

```python
print(s.loc["C"])
```

```text
30.0
```

### `iloc[]`

Selects data by its integer position.

```python
print(s.iloc[2])
```

```text
30.0
```

---

## 5. Cleaning

### `dropna()`

Removes missing (`NaN`) values from the Series.

```python
print(s.dropna())
```

```text
A    10.0
B    20.0
C    30.0
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

### `fillna()`

Replaces missing (`NaN`) values with a specified value.

```python
print(s.fillna(0))
```

```text
A    10.0
B    20.0
C    30.0
D     0.0
E    20.0
F    10.0
G    40.0
Name: Marks, dtype: float64
```

### `replace()`

Replaces specified values with another value.

```python
print(s.replace(10, 99))
```

```text
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

## 6. Other Useful Functions

### `value_counts()`

- Counts how frequently each value appears in the Series.
- By default, missing values are not included.

```python
print(s.value_counts())
```

```text
Marks
10.0    2
20.0    2
30.0    1
40.0    1
Name: count, dtype: int64
```

### `unique()`

Returns the unique values present in the Series.

```python
print(s.unique())
```

```text
[10. 20. 30. nan 40.]
```

### `sort_values()`

Sorts the values of the Series in ascending order by default.

```python
print(s.sort_values())
```

```text
A    10.0
F    10.0
E    20.0
B    20.0
C    30.0
G    40.0
D     NaN
Name: Marks, dtype: float64
```