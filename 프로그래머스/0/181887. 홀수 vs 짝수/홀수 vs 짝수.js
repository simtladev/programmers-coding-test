function solution(num_list) {
    const list = num_list.reduce((acc, num, i)=>{
        acc[i % 2] += num;
        return acc;
    },[0,0]);
    
    
    return Math.max(...list);
}