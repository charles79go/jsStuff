const longest = (sum, arr) => {
    if (arr.length === 0) return null;
    if (arr.length === 1 && arr[0] !== sum) return null;
    else if (arr.length === 1 && arr[0] === sum) return [0];

    let left = 0;
    let right = 1;
    let currentSum = arr[left] + arr[right];
    let result = null;
    let length = 2;

    while (right < arr.length) {
        if (currentSum === sum) {
            if (right - left + 1 > length) {
                length = right - left + 1;
                result = [left, right];
            }
            right += 1;
            currentSum += arr[right];
        } else if (currentSum > sum) {
            currentSum -= arr[left];
            left += 1;
        } else {
            right += 1;
            currentSum += arr[right];
        }
    }
    return result;
};

console.log(longest(15, [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 0, 0, 0, 5]));
console.log(longest(15, [5, 2, 4, 5, 8, 6, 5, 6, 7, 1, 2, 9, 7, 0, 0, 0, 5]));
