function solution(myString) {
    const answer = myString.split("x").filter((v)=> v).sort();
    
    return answer;
}