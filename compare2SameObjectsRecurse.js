const isSameValue = (x, y) => {
    let sameValue = true;
    const crawl = (x, y) => {
        if (sameValue === false) return;

        if (typeof x === typeof y && Array.isArray(x) === Array.isArray(y)) {
            if (typeof x === 'object' && x !== null) {
                for (let key in x) {
                    if (key in y) {
                        crawl(x[key], y[key]);
                    } else {
                        sameValue = false;
                    }
                }
            }

            if ((typeof x === 'string' || typeof x === 'number') && x !== y)
                sameValue = false;
        } else {
            sameValue = false;
        }
    };

    crawl(x, y);
    if (sameValue) crawl(y, x);

    return sameValue;
};

let first = {
    rmDescription: 'amos',
    rmSups: [
        {
            supplierName: 'sup1',
            costHistory: [
                { price: 1, date: 'date' },
                { price: 1.2, date: 'date2' }
            ]
        },
        {
            supplierName: 'sup2',
            costHistory: [
                { price: 21, date: 'date' },
                { price: 21.2, date: 'date2' }
            ]
        }
    ],
    rmPOs: ['11111', 22222]
};
let second = {
    rmDescription: 'amos',
    rmSups: [
        {
            supplierName: 'sup1',
            costHistory: [
                { price: 1, date: 'date' },
                { price: 1.2, date: 'date2' }
            ]
        },
        {
            supplierName: 'sup2',
            costHistory: [
                { price: 21, date: 'date' },
                { price: 21.2, date: 'date2' }
            ]
        }
    ],
    rmPOs: ['11111', 22222]
};

let copy = JSON.stringify(first);
let obj = JSON.parse(copy);
console.log(isSameValue(obj, second));

console.log(isSameValue(first, second));
