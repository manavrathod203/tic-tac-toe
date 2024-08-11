export function checkWinner(board, size) {
    // check for rows
    for (let i = 0; i < size; i++) {
        const symbol = board[i][0];
        if (symbol) {
            let winner = true;
            for (let j = 1; j < size; j++) {
                if (symbol != board[i][j]) {
                    winner = false;
                    break;
                }
            }
            if (winner) {
                return symbol;
            }
        }
    }

    // check for columns
    for (let j = 0; j < size; j++) {
        const symbol = board[0][j];
        if (symbol) {
            let winner = true;
            for (let i = 1; i < size; i++) {
                if (symbol != board[i][j]) {
                    winner = false;
                    break;
                }
            }
            if (winner) {
                return symbol;
            }
        }
    }

    // check for main diagonal
    let symbol = board[0][0];
    let winner = true;
    if (symbol) {
        for (let i = 1; i < size; i++) {
            if (symbol != board[i][i]) {
                winner = false;
                break;
            }
        }
        if (winner) {
            return symbol;
        }
    }

    // check for anti diagonal
    symbol = board[0][size-1]; // [size-1-0]   here 0 is i ie. [size-1-i] 
    winner = true;
    if (symbol) {
        for (let i = 1; i < size; i++) {
            // [size-1]is last element. anti diagonally last element-1, last element-2,...
            if (symbol != board[i][size-1-i]) {
                winner = false;
                break;
            }
        }
        if (winner) {
            return symbol;
        }
    }

    return null
}

