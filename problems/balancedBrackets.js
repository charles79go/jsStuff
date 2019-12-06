let balanceBracket = brackets => {
    let b;
    let closingList = [];
    let brObj = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    for (let i = 0; i < brackets.length; i += 1) {
        b = brackets[i];
        if(b in brObj){
            closingList.push(brObj[b]);
        } else {
            if (b === closingList[closingList.length-1]) {
                closingList.pop();
            } else {
                // not balanced
                return 'unbalanced'
            }
        }
    }
    // if(closingList.length != 0) return 'unbalanced';
    return 'balanced';
}

module.exports = balanceBracket;