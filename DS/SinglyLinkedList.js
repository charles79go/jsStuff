class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.head === null;
    }
    unshift(val) {
        let node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
    }
    size() {
        return this.length;
    }
    search(val) {
        let found = false;
        let current = this.head;
        while (current && !found) {
            if(current.value === val) found = true;
            else current = current.next;
        }
        return found;
    }
    remove(val) {
        let previous = null;
        let current = this.head;
        let found = false;
        
        while(current && !found) {
            if(current.value === val) found = true;
            else {
                previous = current;
                current = current.next;
            }
        }

        if(found) {
            if(previous === null) { // means first element will be removed.
                this.head = this.head.next;
                if(this.head === null) { // empty List now.
                    this.tail = null;
                } 
            } else {
                previous.next = current.next;
                if(previous.next === null) this.tail = previous;
            }
            this.length -= 1;
        }
    }

    shift() {
        if(this.head === null) return null;

        let temp = this.head;
        let current = this.head.next;
        temp.next = null;
        this.head = current;
        if(this.head === null) this.tail = null;

        this.length = this.lenth === 0 ? this.length : this.length -= 1;

        return temp;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.head ===  null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    pop() { // remove last in list
        if(this.head === null) return null;

        //! at least one element
        let previous = null;
        let current = this.head;
        while(current.next) {
            previous = current;
            current = current.next;
        }

        if(previous === null) {  //! just one element
            this.head = null;
            this.tail = null;
        } else {
            this.tail = previous;
            this.tail.next = null;
        }
        this.length -= 1;
        return current;

    }

    reverse() {

    }
}

let x = new List();
x.push('amos');
x.push('charles');
x.push('go');
x.reverse();
console.log(JSON.stringify(x,null,  4))


