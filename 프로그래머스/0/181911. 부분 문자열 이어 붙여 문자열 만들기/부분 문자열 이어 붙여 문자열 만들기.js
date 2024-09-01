function solution(my_strings, parts) {
    const answer = parts.reduce((result, cur, i)=>{
        const currentStrings = my_strings[i];
        const [s,e] = cur;
        const sliceStr = currentStrings.slice(s, e + 1);
        return result + sliceStr; 
    },"")
    
    
    
    return answer;
}