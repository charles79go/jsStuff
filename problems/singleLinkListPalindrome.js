class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Single {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    shift(){
        if(!this.head) return null;
        let nextHead = this.head.next;
        let current = this.head;
        this.head = nextHead;
        if(this.head === null) this.tail = null;
        current.next = null;
        return current.value
    }
}

const checkPalindrome = list => {

    let arr = [];
    let current = list.head;

    while(current) {
        arr.push(current.value);
        current = current.next;
    }

    let start = 0;
    let end = arr.length -1;
    while(start <= end) {
        if(arr[start] !== arr[end]) return false;
        start += 1;
        end -= 1;
    }
    return true;
}

let x = new Single();
x.push(1);
x.push(2);
x.push(3);
x.push(4);
x.push(3);
x.push(2);
x.push(1);
console.log(JSON.stringify(x, null, 4));
console.log(checkPalindrome(x));