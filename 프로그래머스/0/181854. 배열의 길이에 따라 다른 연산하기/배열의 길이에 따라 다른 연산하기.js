function solution(arr, n) {
    const answer = arr.map((v, i)=> {
        if(arr.length % 2 !== i % 2){
            return v + n;
        }
        
        
        return v;
    })
    return answer;
}