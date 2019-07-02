const fib = (n, map = {}) => {
    if (map[n]) return map[n];

    if (n < 2) return n;

    return map[n] = fib(n - 1, map) + fib(n - 2, map);
}

console.log(fib(6));