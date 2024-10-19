function solution(t, p) {
    const answer = Array.from({length: t.length - p.length + 1}, (_, i)=>{
        return t.slice(i, i + p.length);
    }).filter((v)=> +v <= +p).length;
    return answer;
}