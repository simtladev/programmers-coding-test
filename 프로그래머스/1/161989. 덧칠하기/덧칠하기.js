function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    for(let v of section) {
        if(painted < v) {
            painted = v + m - 1;
            answer++;
        }
    }
    return answer;
        
}