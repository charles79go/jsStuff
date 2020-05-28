function numberPalindrome(number) {
    let bigDigit = 1;
    let num = number;

    let smallDigit = 1;
    let first = 0;
    let last = 0;

    while (num > 9) {
        num /= bigDigit;
        bigDigit *= 10;
    }

    while (smallDigit <= bigDigit) {
        first = Math.floor(number / bigDigit) % 10;
        last = Math.floor(number / smallDigit) % 10;
        // console.log(first, last);
        if (first !== last) return false;
        bigDigit /= 10;
        smallDigit *= 10;
    }
    return true;
}

console.log(numberPalindrome(23532));
