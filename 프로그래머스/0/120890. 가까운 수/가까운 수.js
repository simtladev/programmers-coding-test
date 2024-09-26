function solution(array, n) {
    const [answer] = array.reduce((acc, cur)=>{
        const c = Math.abs(cur - n);
        if(acc[0] === undefined || acc[1] === undefined){
            return [cur, c];
        }
        if(c < acc[1] || c === acc[1] && cur < acc[0]){
            return [cur, c];
        }
        return acc;
    }, [])
    return answer;
}