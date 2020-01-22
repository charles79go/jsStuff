const balanceCounter = str => {
    let q = [];
    counter = 0;
    for (let i = 0; i < str.length; i +=1){
        if(str[i] === '(') q.push(')');
        else {
            if(q.length === 0) counter +=1;
            else q.shift();
        }
    }
    return counter += q.length;
}

console.log(balanceCounter( '(())(' )); //1
console.log(balanceCounter( '()())' )); //1
console.log(balanceCounter( ')(' )); //2
console.log(balanceCounter( '()()()' )); //0
console.log(balanceCounter( '()())()' )); //1
