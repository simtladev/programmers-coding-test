function solution(arr, flag) {
    const answer = flag.reduce((acc, cur, i)=>{
        
        if(cur){
            return [...acc, ...Array(arr[i] * 2).fill(arr[i])];
        }else{
            return [...acc].slice(0, acc.length - arr[i]);
        }
        
    },[])
    return answer;
}