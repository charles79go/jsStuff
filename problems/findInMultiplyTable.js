findInTable = (grid, target) => {

    let map = {};
    count = 0;
    for (let i = 1; i <= grid; i+= 1) map[i] = true;
    for (let i = 1; i <= grid; i+= 1) if(map[target/i]) count += 1;
    return count;
}

console.log(findInTable(6, 12)) //4