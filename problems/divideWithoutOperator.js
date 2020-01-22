const divideBy = (val, divBy) => {
    let count = 0;
    while(val - divBy >= 0) {
        val -= divBy;
        count += 1;
    }
    return count;
}

console.log(divideBy(15,5)); // 3
console.log(divideBy(14,5)); // 2