function recursivePalindrome(string) {
    //base case
    if (string.length <= 1) return true;
    if (string[0] !== string[string.length - 1]) return false;
    // console.log('Still true', string);
    return recursivePalindrome(string.substring(1, string.length - 1));
}

console.log(recursivePalindrome('amosama'));
