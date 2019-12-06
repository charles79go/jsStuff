class NumObj {
    constructor(num) {
        this.num = num;
    }

    get val() {
        return this.num;
    } 

    toString() {
        return this.num;
    }

    add(x) {
        this.num = x + this.num;
        return this;
    }

    multiply(x) {
        this.num = x * this.num;
        return this;
    }


}


let x = new NumObj(4);
console.log(x);
console.log(x.add(2));
console.log(x.add(2).multiply(4).val);

