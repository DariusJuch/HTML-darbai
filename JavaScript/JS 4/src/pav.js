let number = 8;
function fib(n) {
    if (n < 2){
        return n;
    }
    return fib(n - 1) + fib (n - 2);
}

console.log(fib(number));