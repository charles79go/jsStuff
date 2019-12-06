const findSubstring = (str, sub) => {
    let current = '';
    let found = false;
    let index = 0;
    for(let c of str) {
        current += c;
        if(current.length === sub.length) {
            found = (current === sub ? true : false) || found;
            if(found) return index;
            current = current.slice(1);
            index += 1;
        }
    }
    return -1;
}

console.log(findSubstring('amos charles go', 'go')); // t
console.log(findSubstring('amos charles go', 's ch')); // t
console.log(findSubstring('amos charles go', 'les')); // t
console.log(findSubstring('amos charles go', 'amos')); // t
console.log(findSubstring('amos charles go', 'lse')); // f
console.log(findSubstring('ls', 'lse')); // f

class StringObj {
    constructor(str) {
        this.str = str;
    }

    toString() {
        return this.str;
    }

    indexOf(sub) {
        let current = '';
        let found = false;
        let index = 0;
        for(let c of this.str) {
            current += c;
            if(current.length === sub.length) {
                found = (current === sub ? true : false) || found;
                if(found) return index;
                current = current.slice(1);
                index += 1;
            }
        }
        return -1;
    }
}

// StringObj.prototype.toString = () => this.str;

let x = new StringObj('name');
console.log(x);
console.log(x.indexOf('me'));
console.log(x.indexOf('an'));