const maxContingousSubArray = (arr) => {
    // let max = arr[0];
    // let current = max;
    // for (let i = 1; i < arr.length; i += 1) {
    //     current = current + arr[i] > arr[i] ? current + arr[i] : arr[i];
    //     max = current > max ? current : max;
    //     console.log(max, arr[i]);
    // }
    // return max;

    let max = arr[0];
    let current = max;
    let currentArr = [max];
    let maxArr = [max];

    for (let i = 1; i < arr.length; i += 1) {
        if (current + arr[i] > arr[i]) {
            currentArr.push(arr[i]);
            current = current + arr[i];
        } else {
            currentArr = [arr[i]];
            current = arr[i];
        }

        if (current > max) {
            max = current;
            maxArr = currentArr.slice();
        }
    }
    return { max, array: maxArr };
};

console.log('>>>', maxContingousSubArray([8, 3, 6, 1, 1, -3, 5, 7, 8, -10, 9]));
console.log(
    '>>>',
    maxContingousSubArray([8, -3, -6, 1, -1, -3, 5, 7, 8, -10, 9])
);
console.log('>>>', maxContingousSubArray([-2, 2, 5, -11, 6]));
