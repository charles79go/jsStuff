const clone = x => {
    if (Array.isArray(x)) {
        return x.map(i => clone(i));
    }
    if (typeof x === 'object') {
        let blank = {};
        for (key in x) {
            blank[key] = clone(x[key]);
        }
        return blank;
    }
    return x;
}

x = {a: 1, b:2, c:3}
y = clone(x);
x.a = 'bbbbbb'

console.log(clone(345));
console.log(clone('amos'));
console.log(clone([1,2,3]));
console.log(x);
console.log(y);