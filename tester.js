const tester = (fn, tests) => {
    let result, counter = 1;
    for(let test of tests ) {
        result = fn(test.input) === test.output ? 'passed' : 'failed';
        console.log(`Test ${counter}: ${result}`);
        counter+=1;
    }
}

let test1 = [
    {input: 1, output: 11},
    {input: 2, output: 12},
    {input: 4, output: 14},
    {input: 5, output: 15},
    {input: 6, output: 16},
    {input: 9, output: 19},
]


let add10 = x => x + 11;

tester(add10, test1);