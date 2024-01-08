#!/usr/bin/python3
from calculator_1 import add, sub, mul, div 

a = 10
b = 5

result_add = add(a, b)
result_subtract = sub(a, b) 
result_multiply = mul(a, b)
result_divide = div(a, b)

print(f"Addition: {a} + {b} = {result_add}")
print(f"Subtraction: {a} - {b} = {result_subtract}")
print(f"Multiplication: {a} * {b} = {result_multiply}")
print(f"Division: {a} / {b} = {result_divide}")
