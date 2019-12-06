// bad time complexity most probably.

const maxSub = (arr, k) => {

    let maxArr = [];
    let result = [];

    for (let item of arr) {
        maxArr.push(item);
        if(maxArr.length ===  k) {
            result.push(Math.max(...maxArr));
            maxArr.shift();
        } 
    }

    return result;

}

console.log(maxSub([10,5,2,7,8,3,11], 3)); // 10,7,8,8,11