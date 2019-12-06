let logger = (x) => `${x} is the answer`;
let multiply = (x,y) => x*y;

let squareLogger = (x, multiFn, logFn) => logFn(multiFn(x,x));

let squareLogger2 = (x) => (multiFn, logFn) => logFn(multiFn(x,x));


console.log(squareLogger(5, multiply, logger));
console.log(squareLogger2(6)(multiply, logger));



// let arr = [[1,2,3], [4,5], [6]];

// let newArr = arr.reduce((result, eachArr) => {
//     eachArr.forEach(el => result.push(el));
//     return result;
// }, ['padded']);

// console.log(newArr);



// const loop = (val, testFn, decFn, logFn) => {
//     while (testFn(val)) {
//         logFn(val);
//         val = decFn(val);
//     }
// }

// loop(3, n => n > 0, n => n-1, console.log);





// let everyFn = (arr, fn) => {
//     let result = true;
//     arr.forEach(el => {
//         if(!fn(el)) result = false;
//     });
//     return result;
// }

// console.log(everyFn([1,2,3,4,5], n => n > 0));