function solution(n) {    
    let i = 0;
    let j = 0;
    let location = 1;
    let count = 1;
    
    
    const answer = Array.from({length: n}, () => Array(n).fill(0))
    
    
    while(count <= Math.pow(n,2)){
        answer[i][j] = count;
        
        if(count === Math.pow(n,2)) break;
        
        if(location === 1){
            if(answer[i] && answer[i][j + 1] === 0){
                j++; 
            }else{
                location = 2;
                continue;
            }
        } 
        
        if(location === 2){
            if(answer[i + 1] && answer[i + 1][j] === 0){
                i++;
            }else{
                location = 3;       
                continue;
            }
        }  
        if(location === 3){
            if(answer[i] && answer[i][j - 1] === 0){
                j--;
            }else{
                location = 4;
                continue;
            }
        }    
           
        if(location === 4){
            if(answer[i - 1] && answer[i - 1][j] === 0){
                i--;
            }else{
                location = 1;
                continue;
            }
        }    
        
        count++;
    }
    
    

    return answer;
}

