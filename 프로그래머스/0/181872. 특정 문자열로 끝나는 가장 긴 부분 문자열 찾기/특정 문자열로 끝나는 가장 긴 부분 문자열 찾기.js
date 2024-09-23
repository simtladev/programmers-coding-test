function solution(myString, pat) {
    
    
    const answer = myString.slice(0, myString.lastIndexOf(pat) + pat.length)
    
    return answer;
}