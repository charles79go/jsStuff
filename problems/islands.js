let globe = [
    [1,0,0,0,0],
    [0,0,1,1,0],
    [0,1,1,0,0],
    [0,0,0,0,0],
    [1,1,0,0,1],
    [1,1,0,0,1]
];


const islands = (matrix) => {

    const markIsland = (x,y) => {
        if(matrix[x][y] === 0 || matrix[x][y] === 2) return;
        matrix[x][y] = 2;

        // check of out of bounds
        let north = (y-1 < 0) ? y : y-1;
        let south = (y+1 > matrix[x].length -1 ) ? y : y+1;
        let west = (x-1 < 0) ? x : x-1;
        let east = (x+1 > matrix.length -1) ? x : x+1;
        
        markIsland(x, north);
        markIsland(x, south);
        markIsland(west, y);
        markIsland(east, y);
    }


    count = 0;
    for (let x = 0; x < matrix.length; x += 1){
        for (let y = 0; y < matrix[x].length; y += 1){
            if(matrix[x][y] === 1) {
                count += 1;
                markIsland(x,y);
            }
        }
    }
    console.log(matrix);
    return count;
}

console.log('>>> Number of Island:', islands(globe));