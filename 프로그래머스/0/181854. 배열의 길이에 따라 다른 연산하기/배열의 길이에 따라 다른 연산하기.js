function solution(arr, n) {
    const answer = arr.map((v, i)=> {
        if(arr.length % 2 === 0 &&  i % 2 !== 0 || arr.length % 2 !== 0 &&  i % 2 === 0){
            return v + n;
        }
        
        
        return v;
    })
    return answer;
}