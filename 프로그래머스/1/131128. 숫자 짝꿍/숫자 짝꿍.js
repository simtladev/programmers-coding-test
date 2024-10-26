function solution(X, Y) {
//     const YList = [...Y];
//     const temp = [...X].reduce((acc, cur)=> {
//         if(YList.indexOf(cur) !== -1){
//             acc.push(+cur)
//             YList.splice(YList.indexOf(cur), 1);
//         }
        
//         return acc;
//     }, []).sort((a,b)=> b - a).join("");
    
    
//     const answer = temp === "" ? "-1" : (+temp).toString()
    
//     return answer;
        
    let answer = "";
    for(let i = 9; i >= 0; i--){
        const xLength = [...X].filter((v)=> +v === i).length;
        const yLength = [...Y].filter((v)=> +v === i).length;
        
        answer += i.toString().repeat(Math.min(xLength, yLength));
    }
    
    if(answer === "") return "-1";
    if(+answer === 0) return "0"
    
    return [...answer].sort((a,b) => +b - +a).join("");
}