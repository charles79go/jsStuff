const medianStream = inputArr => {

    let outputArr = [];
    let medianIndex;

    inputArr.forEach(item => {

        outputArr.push(item);
        outputArr.sort((a,b) => a-b);

        // determine median
        if(outputArr.length % 2 === 0 ) { // even

            let right = outputArr.length / 2;
            let left = right - 1;
            let median = (outputArr[left] + outputArr[right]) / 2;
            console.log(median);
        } else { // odd
            medianIndex = Math.floor(outputArr.length/2);
            console.log(outputArr[medianIndex]);
        }
    });
    console.log(outputArr)
}



medianStream([2,1,5,7,2,0,5]);
