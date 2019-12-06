const volume = arr => {
    let vol = 0;

    let lowerwall = arr[0].length > arr[arr.length - 1].length ? arr[arr.length - 1].length : arr[0].length;

    for(let i = 1; i < arr.length -1; i += 1) {
        vol += (lowerwall - arr[i].length);
    }

    return vol;
}

let arr1 = [[1,1,1],[],[1],[1,1],[1,1,1,1,1]];
let arr2 = [[1,1,1,1],[1],[],[1,1],[1,1,1,1,1]];
let arr3 = [[1,1,1,1],[],[1],[1,1],[1,1,1]];

console.log(volume(arr1)); // 6
console.log(volume(arr2)); // 9
console.log(volume(arr3)); // 6