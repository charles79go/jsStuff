let selection = arr => {
    let min;
    for(let i = 0; i < arr.length -1; i+=1) {
        min = i;
        for(let j = i+1; j < arr.length; j+=1) {
            min = arr[min] < arr[j] ? min : j;
        }
        if(arr[min] < arr[i]) [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    // console.log(arr);
    return arr;
}

module.exports = selection;