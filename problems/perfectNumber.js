const makePerfect = n => {
    // handle case for n = 0;
    // handle case for digits of n is > 10;
    let digits = n.toString().split('');
    let remainder = 10;
    for (let i = 0; i < digits.length; i +=1) {
        remainder -= digits[i];
    }
    digits.push(remainder)
    return digits.join('');
}

console.log(makePerfect(1)); // 19
console.log(makePerfect(2)); // 28
console.log(makePerfect(34)); // 343