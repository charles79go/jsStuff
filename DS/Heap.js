class Heap {
    constructor(){
        this.list = [];
    }

    add(val) {
        this.list.push(val);

        let bubble = list => {
            let currentIdx = list.length - 1;
            let parentIdx;
            let rightPos = false;
            do {
                parentIdx = (Math.floor((currentIdx-1)/2) >= 0) 
                    ? Math.floor((currentIdx-1)/2)
                    : 0;

                if(list[currentIdx] > list[parentIdx]) {
                    [ list[currentIdx], list[parentIdx] ] = 
                    [ list[parentIdx], list[currentIdx] ];

                    currentIdx = parentIdx;

                } else rightPos = true;

            } while(parentIdx && !rightPos);
        }

        bubble(this.list);
    }

    extractMax() {

        let fixTheHeapFn = list => {
            let currentIdx = 0;

            while(currentIdx < list.length) {
                let leftChildIdx = 2 * currentIdx + 1;
                let rightChildIdx = 2 * currentIdx + 2;

                if(leftChildIdx > list.length) break; // in place already;
                else {  // there is a left child;

                    if(rightChildIdx > list.length) { //no right child. check left.

                        if(list[currentIdx] < list[leftChildIdx]) {
                            [list[currentIdx],  list[leftChildIdx]] = 
                            [ list[leftChildIdx], list[currentIdx]];
                            currentIdx = leftChildIdx;
                        } else break; 

                    } else { // both right and left child present

                        if(list[rightChildIdx] > list[leftChildIdx]) {
                            // right child is greater so...

                            // attempt to exchange on the right child
                            if(list[currentIdx] < list[rightChildIdx]) {
                                [list[currentIdx],  list[rightChildIdx]] = 
                                [ list[rightChildIdx], list[currentIdx]];
                                currentIdx = rightChildIdx;
                            } else break;

                        } else { // left child is greater so...
                            
                            // attempt to exchange on left child
                            if(list[currentIdx] < list[leftChildIdx]) {
                                [list[currentIdx],  list[leftChildIdx]] = 
                                [ list[leftChildIdx], list[currentIdx]];
                                currentIdx = leftChildIdx;
                            } else break;
                        }
                    }
                } 
            }
        }

        if(this.list.length <= 1) return this.list.pop();

        let max = this.list.shift();
        let last = this.list.pop();
        this.list.unshift(last);
        fixTheHeapFn(this.list);
        return max;       
    }
        
}


let heap = new Heap();
heap.add(10);
heap.add(7);
heap.add(6);
heap.add(4);
heap.add(5);
heap.add(6);
heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
console.log(heap.list);