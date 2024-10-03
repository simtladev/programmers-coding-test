function solution(array) {
    const object = array.reduce((acc, cur)=>{
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{});
    
    const [a, b] = Object.entries(object).sort((a, b)=>b[1] - a[1]);
    console.log(a, b)
    
    const answer = a && b && a[1] === b[1]  ? -1 : +a[0];
    return answer;
}