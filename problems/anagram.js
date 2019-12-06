let isAnagram = (s1, s2) => {
    if (s1.length !== s2.length) return false;

    let counter = {};

    for(let i of s1) {
        counter[i] ? counter[i] += 1 : counter[i] = 1;
    }

    for(let k of s2) {
        if(!counter[k]) return false;
        counter[k] -= 1;
    }

    return true;
}

console.log(isAnagram('aaabbbccc', 'aaabbbcca'));


// let isAnagram = (s1, s2) => {
//     if (s1.length !== s2.length) return false;

//     let counter = {}, counter2 = {};

//     for(let i of s1) {
//         counter[i] ? counter[i] += 1 : counter[i] = 1;
//     }

//     for(let k of s2) {
//         counter2[k] ? counter2[k] += 1 : counter2[k] = 1;
//     }

//     for(let key in counter) {
//         if (counter[key] !== counter2[key]) return false;
//     }

//     return true;
// }