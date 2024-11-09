class CraneGame {
    constructor(board){
        this.basket = [];
        this.columns = this.transposeBoard(board);
        this.point = 0;
    }
    
    transposeBoard(board){
        const columns = Array.from({ length: board[0].length }, () => []);
        for (let row of board) {
            row.forEach((item, index) => {
                if (item !== 0) columns[index].push(item);
            });
        }
        return columns;
    }
    
    move(section){
        const sell = this.columns[section - 1];
        const doll = sell.shift();
        
        if(doll){
            this.basket.push(doll);
            this.checkDollChain();
        }
    }
    
    checkDollChain(){
        if(this.basket.length < 2) return;
        const lastDolls = this.basket.slice(-2);
        if(lastDolls[0] === lastDolls[1]){
            this.basket.splice(-2);
            this.point += 2;
        } 
    }
    
}



function solution(board, moves) {
    const craneGame = new CraneGame(board);
    
    for(const move of moves){
        craneGame.move(move);
    }
    
    
    const answer = craneGame.point;
    
    return answer;
}