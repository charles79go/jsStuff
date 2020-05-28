const sumOfTwo = (arr1, arr2, target) => {
    let map = {};
    arr1.forEach((item) => {
        map[item] = item;
    });

    for (let i = 0; i < arr2.length; i++) {
        if (map[target - arr2[i]]) return [map[target - arr2[i]], arr2[i]];
    }
    return null;
};

console.log(sumOfTwo([8, 3, 6, 1], [20, 50, 44, 30], 53));
