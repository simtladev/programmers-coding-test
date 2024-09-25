function solution(my_str, n) {
    // const answer = [];
    // for(let i =0; i < my_str.length; i+= n){
    //     answer.push(my_str.slice(i, n + i));
    // }
    // return answer;
    
    const answer = Array.from({ length: Math.ceil(my_str.length / n) }, (_, i) =>{
        return my_str.slice(i * n, i * n + n)
    });
    
    return answer;
}