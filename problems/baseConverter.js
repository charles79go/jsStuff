const convert = (n, base) => {
  let key = ["0", "1", "2", "3","4" ,"5" ,"6", "7","8","9","A","B","C", "D", "E", "F"];

  let digitsArr = [];
  let result = '';

  while(n > 0){
    digitsArr.push(key[n%base]);
    n = Math.floor(n/base);
  }

  while(digitsArr.length > 0) {
    result = result.concat(digitsArr.pop());
  }

  return result;
}

// console.log(convert(10, 2));
// console.log(convert(29,16));
// console.log(convert(256,16));

const baseToDecConvert = (str, base) => {
  let key = ["0", "1", "2", "3","4" ,"5" ,"6", "7","8","9","A","B","C", "D", "E", "F"];
  let digits = [];
  let result = 0;

  for(let i = str.length -1; i >= 0; i-- ) {
    digits.push(str[i]);
  }
  for(let i = 0; i < digits.length; i+=1) {
    result += (key.indexOf(digits[i]) * (Math.pow(base, i)));
  }
  return result;
}

console.log(baseToDecConvert("1F",16));
console.log(baseToDecConvert("CAD",16)); //3245
console.log(baseToDecConvert("10166",16)); // 65894
console.log(baseToDecConvert("1101001111110111",2)); //54263