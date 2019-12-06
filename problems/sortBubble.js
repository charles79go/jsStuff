// let bubble = arr => {
//     for(let i = 1; i < arr.length; i+=1) {
//         for(let j = 0; j < arr.length - i; j+=1) {
//             if(arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//     }
//     return arr;
// }

// module.exports = bubble;


const bubble = arr => {
    let noSwap;
    for (let i = 1; i < arr.length; i +=1 ) {
        console.log(1)
        noSwap = true;
        for(let j = 0; j < arr.length - i; j += 1) {
            if (arr[j] > arr[j+1]) {
                noSwap = false;
                [[arr[j]],[arr[j+1]]] = [[arr[j+1]],[arr[j]]];
            }
        }
        if(noSwap) return arr;
    }
    return arr;
}


console.log(bubble([4,5,1,2,8,7,5]));
console.log(bubble([6,1,2,3,4,5]));
console.log(bubble([14,445,71,23,85,74,59]));