class Stack {
  constructor(){
    this.items = [];
  }
  push(i){
    this.items.push(i);
  }
  pop() {
    return this.items.pop();
  }
  peek(){
    return this.items.slice(this.items.length-1);
  }
  isEmpty(){
    return this.items.length === 0;
  }
  showContents(){
    this.items.forEach((val, index)=> {
      console.log(`Index ${index}: ${val}`);
    });
  }
}

module.exports = Stack;