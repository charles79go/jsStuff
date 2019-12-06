const insertion = arr => {
    
    for (let i = 1; i < arr.length; i+=1) {
        for(let j = i; j > 0; j -= 1) {
            if(arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            } else {
                // already sorted...
                break;
            }
        }
    }

    return arr;
}

module.exports = insertion;