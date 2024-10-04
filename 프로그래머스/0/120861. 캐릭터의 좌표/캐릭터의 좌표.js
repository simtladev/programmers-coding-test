
function solution(keyinput, board) {
    var answer = keyinput.reduce((acc, cur)=>{
    
        if(cur === "up" && acc[1] < Math.floor(board[1] / 2)){
             acc[1] += 1;
        }
        
        if(cur === "down" && acc[1] > -Math.floor(board[1] / 2)){
             acc[1] += -1;
        }
        
        if(cur === "left" && acc[0] > -Math.floor(board[0] / 2)){
             acc[0] += -1;
        }
        
        if(cur === "right" && acc[0] < Math.floor(board[0] / 2)){
             acc[0] += 1;
        }
        
        return acc;
    },[0, 0]);
    return answer;
}