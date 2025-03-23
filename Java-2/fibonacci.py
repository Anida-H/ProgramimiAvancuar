def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b


print(fibonacci(0))  # Output: 0
print(fibonacci(1))  # Output: 1
print(fibonacci(5))  # Output: 5
print(fibonacci(7))  # Output: 13



