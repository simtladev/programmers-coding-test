function solution(start_num, end_num) {
    // const result = [];
    
    // for(let i = start_num; i >= end_num; i--){
    //     result.push(i);
    // }
    
    const result = Array(start_num - end_num  + 1).fill(start_num).map((v, i)=> v - i);
    
    
    
    
    return result;
}