function solution(s) {
    var answer = [...s].map((v, i)=> {
        return  s.slice(0, i).lastIndexOf(v) !== -1 ? i - s.slice(0, i).lastIndexOf(v) : -1;
    });
    return answer;
}