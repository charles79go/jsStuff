const factorialRecursive = n => {
    if (n <= 1 ) return 1;
    return n * factorialRecursive(n-1);
}

const facotrialIter = n => {
    result = 1, i = 1;

    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorialRecursive(-1));
console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));

console.log(facotrialIter(-1));
console.log(facotrialIter(0));
console.log(facotrialIter(1));
console.log(facotrialIter(3));
console.log(facotrialIter(4));
console.log(facotrialIter(5));