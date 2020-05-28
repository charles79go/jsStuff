const mergeFn = (arr1, arr2) => {
    let index1 = 0;
    let index2 = 0;

    let newArr = [];

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
            newArr.push(arr1[index1]);
            index1 += 1;
        } else {
            newArr.push(arr2[index2]);
            index2 += 1;
        }
    }

    // if (index1 < arr1.length) newArr = newArr.concat(arr1.slice(index1));
    // if (index2 < arr2.length) newArr = newArr.concat(arr2.slice(index2));

    while (index1 < arr1.length) {
        newArr.push(arr1[index1]);
        index1 += 1;
    }
    while (index2 < arr2.length) {
        newArr.push(arr2[index2]);
        index2 += 1;
    }

    return newArr;
};

const mergeSort = (arr) => {
    // console.log(arr);

    // base case first.
    if (arr.length <= 1) return arr;

    let halfIndex = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, halfIndex));
    let right = mergeSort(arr.slice(halfIndex));

    // console.log(`merging: ${left} ${right} as ${mergeFn(left, right)}`);
    return mergeFn(left, right);
};

console.log(mergeSort([10, 5, 2, 8, 4]));
