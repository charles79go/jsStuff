let letterVal = letter => letter.charCodeAt(0);


let orderedColumns = arr => {
    let count = 0;
    for(let i = 0; i < arr.length; i += 1) {
        let start = arr[i][0];
        for(let j = 1; j < arr[i].length; j+= 1) {
            if(letterVal(arr[i][j]) < letterVal(start)){
                count+=1;
                break;
            }
            start = arr[i][j];
        }
    }
    return count;
}

console.log(orderedColumns([['c','d','g'],['b','a', 'h'],['a','f', 'i']])); // 1
console.log(orderedColumns([['a'],['b'],['c'],['d'],['e'],['f']])); // 0;
console.log(orderedColumns([['z', 'w', 'y'],['y','v','s'],['x', 'u', 'r']])); // 3
