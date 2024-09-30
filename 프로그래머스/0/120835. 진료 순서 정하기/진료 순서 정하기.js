function solution(emergency) {
    const answer = emergency.map((v)=> [...emergency].sort((a,b) => b - a).indexOf(v) + 1);
    return answer;
}