function solution(num_list, count = 0) {
    if(!num_list.length) {
        return count;
    }
    
    const [first, ...ext] = num_list;
    
    if(first === 1){
        return solution(ext, count);
    }
    
    if(first % 2 == 0){
        return solution([first / 2 , ...ext], ++count);
    }else{
        return solution([(first - 1) / 2 , ...ext], ++count);
    }
    
    return answer;
}