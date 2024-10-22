function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    
    
    var answer = goal.every((v)=> {
        if(v === cards1[i]){
            i++;
            return true;
        }
        
        if(v === cards2[j]){
            j++;
            return true;
        }
        return false;
    });
    return answer ? "Yes" : "No";
}