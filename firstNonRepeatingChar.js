const first = (str) => {
    let map = {};
    let mapIndex = {};
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
        mapIndex[str[i]] = i;
        if (map[str[i]] > 1) delete mapIndex[str[i]];
    }

    // console.log(mapIndex);
    let min = str.length;
    let minKey = '_';
    for (let key in mapIndex) {
        if (mapIndex[key] < min) {
            min = mapIndex[key];
            minKey = key;
        }
    }
    return minKey;
};

let x = 'aaabcccddefg';
let y = 'ababab';

console.log(first(x));
console.log(first(y));
