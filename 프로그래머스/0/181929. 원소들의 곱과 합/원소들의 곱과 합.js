function solution(num_list) {
    
    const a = num_list.reduce((a , b)=> a * b,1);
    const b = num_list.reduce((a , b)=> a + b,0) ** 2;
    
    const answer = a < b ? 1 : 0;
    return answer;
}