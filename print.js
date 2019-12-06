const print = item => {

    let type = typeof item;
    if(Array.isArray(item)) type = 'array';
    console.log(`>> ${JSON.stringify(item, null, 2)} - type: ${type}`);
}

let x = 4;
let ob = {sample: 4};
let arr = [1,2,3,'amos'];
let str = 'word';
let bool = true;
print(x);
print(ob)
print(arr);
print(str);
print(bool);