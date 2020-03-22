class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    add(val) {

        let newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else {

            let current = this.root;
            let q = [];
            let placed = false;

            while(current && !placed) {
                if(!current.left) {
                    current.left = newNode;
                    placed = true;
                } else {

                    if(!current.right) {
                        current.right = newNode;
                        placed = true;
                    } else {
                        q.push(current.left);
                        q.push(current.right);
                    }
                }
                current = q.shift();
            }
        }
    }
}

let x = new Tree();
x.add(10);
x.add(5);
x.add(15);
x.add(11);
x.add(15);

// console.log(JSON.stringify(x, null, 4));


let findNodesEqualsK = (tree, k) => {

    if (!tree.root) return [];

    let results = [];
    let q = [tree.root];
    let map = {};
    let current = null;

    while ( q.length > 0 ) {

        current = q.shift();
        map[ current.value ] = map[ current.value ] ? map[ current.value ] + 1 : 1;
        if ( current.left ) q.push( current.left );
        if ( current.right ) q.push( current.right );
    }

    for ( let key in map ) {
        key = parseInt(key);
        if(map[key] && map[k-key] && (key !== (k-key)) ) { 
            results.push([key, k-key]);
            map[key] -= 1;
            map[k-key] -= 1;
        }
        if( (key === (k - key)) && map[key] > 1 ) {
            results.push([key, key]);
            map[key] -= 2;
        }
    }
    return results;
}

console.log( findNodesEqualsK( x, 20 ) );  // [ [5,15] ]