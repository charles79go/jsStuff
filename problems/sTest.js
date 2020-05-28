let fn, testArr;

try {
    fn = require(`./${process.argv[2]}`);
    testArr = require(`./${process.argv[3]}`);
} catch(e) {
    console.log('Error loading modules');
    return;
}

let results = [];
let foundUndefined = false;
let sameValue = true;

try {
    // helper function to compare function output and expected output.
    const compare = (x,y) => {

        const crawl = (x,y) => {

            if (sameValue === false) return;

            if(typeof x === typeof y && Array.isArray(x) ===  Array.isArray(y)) {

                if(typeof x === 'object' && x !== null){
                    for (key in x) {
                        if (key in y) {
                            crawl(x[key], y[key]);
                        } else {
                            sameValue = false;
                        }
                    }
                }

                if( typeof x === 'string' || typeof x === 'number' ||
                    x === undefined || x === null) {
                        if(x === undefined) foundUndefined = true;
                        sameValue = x === y;
                    }

            } else {
                sameValue = false;
            }
        }

        crawl(x,y);
        if(sameValue) crawl(y,x);

        return sameValue ? 'passed': 'failed';
    }

    // START of stest function 
    for (let test of testArr) {
        let fnOutput = fn(...test.input);
        if(fnOutput === undefined) {
            console.log('Function output is undefined. Cannot test. Failed test');
            return;
        }
        results.push(compare(fnOutput, test.output));
    }

    let testCount = 0;

    results.forEach(result => console.log(`Test ${testCount+=1}: ${result}`));

    if(foundUndefined && sameValue) console.log('!!!!! "undefined" values found. Test unreliable !!!!!');

} catch(e) {

    console.log('Unknown Error. -- Error executing code.')
}



