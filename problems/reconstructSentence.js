let dict = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'lazy', 'dog', 'near', 'bank', 'the', 'of', 'river'];
let str = 'thequickbrowndogjumpedthefoxneartheriver';

const decode = (dictionary, sentence) => {
    let result = [];
    let dictObj = {};

    dictionary.forEach(word => dictObj[word] = 1);

    let word = '';

    for (let i = 0; i < sentence.length; i+=1) {
        word += sentence[i];
        if(dictObj[word]) {
            result.push(word);
            word = '';
        }
    }

    return result.length ? result : null;
}

let arr = decode(dict, str);

console.log(arr);