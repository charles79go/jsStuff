const add = arr => {
  if(arr.length === 1) return arr[0];
  return arr[0] + add(arr.slice(1));
}

console.log(add([1,2,3,4,5])); //15