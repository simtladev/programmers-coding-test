function solution(id_pw, db) {
    const answer = db.reduce((acc, cur)=>{
        if(cur[0] === id_pw[0] && cur[1] === id_pw[1]){
            return "login";
        }
        
        if(cur[0] === id_pw[0] && cur !== "login"){
            return "wrong pw";
        }
        
        return acc;
    },"fail")
    return answer;
}