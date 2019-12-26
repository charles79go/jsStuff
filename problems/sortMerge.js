const sorter = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] >= arr2[j]) {
      result.push(arr2[j]);
      j+=1;
    } else {
      result.push(arr1[i]);
      i+=1;
    }
  }

  while(i < arr1.length) {
    result.push(arr1[i]);
    i+=1;
  }
  while(j < arr2.length) {
    result.push(arr2[j]);
    j+=1;
  }
  return result;
}

const mergeSort = arr => {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // console.log('>>>', left, right)
  return sorter(left, right);
}

// console.log(sorter([1,3,5,7,9],[2,4,6,10]));
console.log(mergeSort([4,1,7,4,9,10,20,40,23,15,19,3]));