let capitalsDB = {
    us: "Washington",
    china: "Beijing",
    phil: "Manila",
    france: "Paris",
    uk: "London"
}

let callbackFn = (err, msg) => {
    if (err) {
        console.log("Error: Not Found in DB.");
    } else {
        console.log(msg);
    }
}

let getCapital = (country) => {
    setTimeout(()=> {
        if(capitalsDB[country]) {
            let msg = `Promise: Country: ${country.toUpperCase()}. Capital: ${capitalsDB[country]}.`;
            callbackFn(null, msg);
        } else {
            callbackFn("error");
        }
    }, 1500);
}

// getCapital("us");
// getCapital("phil");
// getCapital("china");
// getCapital("India");

// ================================================

let getCapitalPromise = country => new Promise((res, rej)=> {
    setTimeout(()=> {
        if(capitalsDB[country]) {
            let msg = `Promise: Country: ${country.toUpperCase()}. Capital: ${capitalsDB[country]}.`;
            res(msg);
        } else {
            rej("Promise: Error: Not Found in DB.");
        }
    }, 1500);
});


// getCapitalPromise("france").then(
//     res => console.log(res),
//     err => console.log(err)
// );
// getCapitalPromise("Russia").then(
//     res => console.log(res),
//     err => console.log(err)
// );
// getCapitalPromise("uk")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// getCapitalPromise("xxxx")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
    

//============================================

let getCapitalAwait = async (country) => {
    console.log('asyncfunction started!!!');
    let msg = await getCapitalPromise(country);
    console.log(msg);
}

// getCapitalAwait('uk');
// getCapitalAwait('us');

// ======================================

function getCapPromES5(country) {
    return new Promise((res, rej)=> {
        setTimeout(()=> {
            if(capitalsDB[country]) {
                let msg = `Promise: Country: ${country.toUpperCase()}. Capital: ${capitalsDB[country]}.`;
                res(msg);
            } else {
                rej("Promise: Error: Not Found in DB.");
            }
        }, 1500);
    });
}

getCapPromES5("uk")
    .then(res => console.log(res))
    .catch(err => console.log(err))
getCapPromES5("xxxx")
    .then(res => console.log(res))
    .catch(err => console.log(err))