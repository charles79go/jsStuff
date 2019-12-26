const breakUpString = (str, sublength) => {
  let subTextArr = [];
  let startIndex = 0;
  let spaceIndex = -1;
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {

    count++;
    if(startIndex >= i) count = 0;  //! why the hell is this working??

    if(str[i] === ' ' ) spaceIndex = i;

    if(count === sublength)  {

      if(spaceIndex < startIndex) return subTextArr || null;

      subTextArr.push(str.slice(startIndex, spaceIndex));
      startIndex = spaceIndex + 1;
      count = i - spaceIndex;
    } 

  }
  // to get the remainder for the string.
  subTextArr.push(str.slice(startIndex, str.length));
  
  return subTextArr;
}

console.log(breakUpString('The Quick brown fox jumps over the lazy dog', 10));
console.log(breakUpString('The Quick brown fox jumps overthelazy dog', 10));