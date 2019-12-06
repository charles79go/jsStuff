let arr1 = [1,2,3,2];
let arr2 = [1,4,4,9];
let arr3 = [4,9,9,1];

let freq = (a1, a2) => {

    if (a1.length !== a2.length) return false;

    let counterObj = {};

    for(let i of a1) {
        counterObj[i * i] ? counterObj[i * i] += 1 : counterObj[i * i] = 1;
        // console.log(counterObj);
    }

    for(let k of a2) {
        if(!counterObj[k]) return false;
        counterObj[k] -= 1;
        // console.log(counterObj);
    }
    
    return true;
}

console.log(freq(arr1, arr2));