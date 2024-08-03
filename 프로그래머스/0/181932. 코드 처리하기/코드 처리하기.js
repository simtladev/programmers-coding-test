function solution(code) {
    let mode = 0;
    let ret = "";
    
    for(let idx = 0; idx < code.length; idx++){
        const codeItem = code[idx];
        const isCodeItemOne = codeItem === "1";
        
        if(isCodeItemOne){
            mode = !mode;
        }else{
            const isIdxEven = idx % 2 === 0;
            if(!mode && isIdxEven){
                ret += codeItem;
            }
            if(mode && !isIdxEven){
                ret += codeItem;
            }
        }
    }
    
    let answer = ret || "EMPTY";
    
    
    return answer;
}