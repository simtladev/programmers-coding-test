function solution(array) {
    const answer = array.reduce((acc, cur,i)=>{
        return (acc[0] || 0) < cur ? [cur,i] : acc;
    },[])
    return answer;
}