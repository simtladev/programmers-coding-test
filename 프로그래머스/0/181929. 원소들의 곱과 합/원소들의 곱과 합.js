function solution(num_list) {
    
    const a = num_list.reduce((a , b)=> {
        if(a === 0) return b
        return a * b;
    },0);
    const b = num_list.reduce((a , b)=> a + b,0) ** 2;
    
    console.log(a,b)
    
    var answer = a < b ? 1 : 0;
    return answer;
}