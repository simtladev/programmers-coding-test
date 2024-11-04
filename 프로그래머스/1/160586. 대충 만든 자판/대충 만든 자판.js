function solution(keymap, targets) {
    const answer = targets.reduce((result, target)=>{
        const count = [...target].reduce((count, keyword)=>{
            if(count === -1) return count;
            const clicks = keymap.map((v)=> v.indexOf(keyword)).filter((v) => v !== -1);
            if(!clicks.length) return -1;
            return count + Math.min(...clicks) + 1;
        }, 0)
        result.push(count);
        return result;
    },[]);
    return answer;
    
    //map으로 하면 더 좋을듯
}