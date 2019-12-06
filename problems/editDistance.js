const editDifference = (str1, str2) => {
    let difference = 0;

    let longerStr = str1.length > str2.length ? str1.length : str2.length;

    for (let i = 0; i < longerStr; i += 1 ) {
        if (str1[i] !== str2[i]) difference += 1;
    }

    return difference;
}

console.log(editDifference('sitting', 'kitten')); // 3
console.log(editDifference('dunk', 'dumping')); // 5
console.log(editDifference('racecar', 'racket')); // 4