# Uncommon Recursive Function Bug in Javascript

This repository demonstrates a subtle bug in a recursive JavaScript function. The function `foo` calculates a Fibonacci-like sequence, but its handling of base cases (null and 0) introduces unexpected behavior.

## Bug Description

The function incorrectly handles the case when the input is null.  The recursive nature and the specific conditions can lead to unexpected outputs for certain input values.  The base cases for null and 0 are not handled in a way that guarantees consistent and mathematically correct results.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or a similar JavaScript runtime).
4. Observe the output for different inputs, particularly `foo(null)`, `foo(0)`, and `foo(5)`.

## Solution

The solution involves revising the base cases and the logic within the recursive calls to ensure it adheres to the mathematical definition of a Fibonacci-like sequence. View `bugSolution.js` for the corrected code. The corrected code ensures that all base cases and recursive calls align with the expected behavior for this function.