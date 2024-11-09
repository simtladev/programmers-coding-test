class CraneGame {
    constructor(board){
        this.basket = [];
        this.board = [];
        this.point = 0;
        
        for(let i = 0; i < board[0].length; i++){
            const line = [];
            for(let j = 0; j < board.length; j++){
                const sell = board[j][i];
                const isDoll = sell !== 0;
                if(isDoll) line.push(sell);
            }
            this.board.push(line);
        }
    }
    
    move(section){
        const sell = this.board[section - 1];
        const doll = sell.shift();
        const isDoll = !!doll;
        
        
        if(isDoll){
            this.basket.push(doll);
            this.checkDollChain();
        }
    }
    
    checkDollChain(){
        if(this.basket.length < 2) return;
        const lastDolls = this.basket.slice(-2);
        if(lastDolls[0] === lastDolls[1]){
            this.basket = this.basket.slice(0, this.basket.length - 2);
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