let binarySearch = (arr, n) => {
    if(arr.length === 0) return null;

    let left = 0;
    let right = arr.length -1;
    let mid, midVal;

    while (left <= right) {
        if (left === right) return (arr[left] === n) ? left : null;
    
        mid = Math.floor( (right + left) / 2);
        midVal = arr[mid];

        if(midVal > n) right = mid-1;
        if(midVal < n) left = mid +1;
        if(midVal === n) return mid;
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 4)); //3
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5)); // 4
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9)); // 8
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10)); // 9
console.log(binarySearch([], 1)); // null
console.log(binarySearch([2], 1)); // null
console.log(binarySearch([2], 2));  // 0
