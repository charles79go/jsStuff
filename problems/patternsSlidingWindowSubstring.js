let longestSubstring = arr => {

    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;

    let start = 0;
    let maxCount = 0;
    let currentCount = 0;
    let memObj = {};

    for(let i = 0; i < arr.length; i += 1) {
        if(!(arr[i] in memObj)) {
            memObj[arr[i]] = i;
            currentCount += 1;
        } else { // in in memObj already
            if(memObj[arr[i]] >= start) { 
                start = memObj[arr[i]] + 1;
                currentCount = i - memObj[arr[i]];
                memObj[arr[i]] = i;
            } else {
                memObj[arr[i]] = i;
                currentCount += 1;
            }
        }
        maxCount = Math.max(currentCount, maxCount);
    }

    // console.log(memObj);
    // console.log(currentCount);
    return maxCount;

}

let arr1 = ['a', 'b', 'c', 'd', 'b', 'a', 'c', 'e', 'a']; // 5;
let arr2 = ['a', 'b', 'c', 'b', 'b', 'a', 'c', 'e', 'a']; // 4;
let arr3 = 'amoscharlesgo'; // 9;
let arr4 = 'rosemariecel'; // 7;


// console.log(longestSubstring(arr1));
// console.log(longestSubstring(arr2));
// console.log(longestSubstring(arr3));
// console.log(longestSubstring(arr4));
// console.log(longestSubstring('rithmschool')); // 7
// console.log(longestSubstring('thisisawsome')); // 6
// console.log(longestSubstring('longestsubstring')); // 8


// Better implementation.
const longest = arr => {
    if(arr.length === 0) return 0;

    let longest = 0;
    let startIndex = 0;
    let mem = {};

    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] in mem) {
            startIndex = Math.max(  (mem[arr[i]] + 1) , startIndex);
        }
        longest = Math.max(  ((i - startIndex) +1), longest);
        mem[arr[i]] = i;
    }

    return longest;
}

console.log(longest('rithmschool')); // 7
console.log(longest('thisisawsome')); // 6
console.log(longest('longestsubstring')); // 8
console.log(longest('')); // 0
console.log(longest('l')); // 1
console.log(longest('ll')); // 1




