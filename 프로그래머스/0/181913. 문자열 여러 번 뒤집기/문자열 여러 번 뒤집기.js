function solution(my_string, queries) {
    
    const answer = queries.reduce((string, cur)=>{
        const [s,e] = cur;
        const currentString = string.split("");
        const reverseString = currentString.slice(s,e + 1).reverse();
        currentString.splice(s, e - s + 1 , ...reverseString);
        
        return currentString.join("");
    }, my_string)
    
    
    
    
    
    return answer;
}