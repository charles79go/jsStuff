let zeroSum = (arr) => {

    let val1, val2;
    let start = 0;
    let end = arr.length-1
    let zeroSumArr = [];

    while(start < end) {
        val1 = arr[start];
        val2 = arr[end];

        if(val1 >= 0 || val2 <= 0) return zeroSumArr;

        if((val1 + val2) > 0) end -=1;
        if((val1 + val2) < 0) start +=1;
        if((val1 + val2) === 0) {
            zeroSumArr.push([val1, val2]);
            end -=1;
            start +=1;
        }
    }
    return zeroSumArr;
} 

let arr1 = [-4, -3, -2, -1, 0, 2, 3, 4, 5];
let arr2 = [0, 1, 2, 3, 4, 5];
let arr3 = [-3, -2, 0];
let arr4 = [-1, 0, 1];

console.log(zeroSum(arr1));
console.log(zeroSum(arr2));
console.log(zeroSum(arr3));
console.log(zeroSum(arr4));
