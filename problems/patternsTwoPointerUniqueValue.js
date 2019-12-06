let howManyUnique = (arr) => {
    if(arr.length<2) return arr.length;

    let i = 0;
    let j = i+1;
     while (j < arr.length) {
         if(arr[i] !== arr[j]) {
             i+=1;
             arr[i] = arr[j];
         }
         j+=1;
     }
    //  console.log(arr);
     return i+1;
}

let howManyUnique2 = (arr) => {
    if(arr.length<2) return arr.length;

    let i = 0;
    let j = i+1;
    let counter = 1; // if this is ever needed, there must be one unique value.

     while (j < arr.length) {
         if(arr[i] !== arr[j]) {
            counter += 1;
            i = j;
         }
         j+=1;
     }
     return counter
}

console.log(howManyUnique([1,2,2,2,3,3,4,4,4,5,5,'a','a','c','c', 'd','d','d',]));
console.log(howManyUnique([2,'a']));
console.log(howManyUnique(['c','c']));
console.log(howManyUnique(['one']));
console.log(howManyUnique([]));

console.log(howManyUnique2([1,2,2,2,3,3,4,4,4,5,5,'a','a','c','c', 'd','d','d',]));
console.log(howManyUnique2([2,'a']));
console.log(howManyUnique2(['c','c']));
console.log(howManyUnique2(['one']));
console.log(howManyUnique2([]));
