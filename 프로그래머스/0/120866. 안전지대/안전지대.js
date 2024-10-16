function solution(board) {
    const numRows = board.length;
    const numCols = board[0].length;
    
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            const currentSell = board[i][j];
            if(currentSell === 1){
                for(let k = -1; k< 2; k++){
                    for(let l = -1; l < 2; l++){
                        if(board[i + k] && board[i + k][j + l] === 0){
                            board[i + k][j + l] = 2;            
                        }
                    }
                }
            }
        }
    }
    
    const answer = board.flat().filter((v)=> v === 0).length;
    return answer;
}