const chessboardPattern = count => {
    let square = 'B', board = count * count, line = '';

    for (let i = 0; i < board; i++) {

        line += square;
        square = (square === 'B') ? 'O' : 'B';
    
        if (line.length === count) {
            console.log(line);
            line = '';
            if(count % 2 === 0) square = (square === 'B') ? 'O' : 'B';
        }
    }
}

chessboardPattern(8);