function solution(myString) {
    const answer = myString.split("x").map((v)=> v.length);
    return answer;

}