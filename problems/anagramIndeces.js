// level hard daw.

const anagramIndeces = (w, s) => {

    const map = {};
    const indeces = [];

    for(let x = 0; x < w.length; x += 1) {
        map[w[x]] = map[w[x]] ? map[w[x]] + 1 : 1;
    }
    
    for(let i = 0; i < s.length - (w.length -1); i += 1) {
        if(s[i] in map) {
            // make a copy of map
            let localMap = {...map}

            let startIndex = i;
            let index = i;
            let count = 0;
            let isAnagram = true;

            while((count < w.length) && isAnagram){
                if(s[index] in localMap) {
                    localMap[s[index]] = localMap[s[index]] - 1;
                    if(localMap[s[index]] < 0) isAnagram = false;
                } else isAnagram = false;
                count++;
                index++;
            }
            if(isAnagram) indeces.push(startIndex);
        }
    }
    return indeces;
}

console.log(anagramIndeces('ab', 'abxaba'));  // [0,3,4]