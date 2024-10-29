function solution(n, arr1, arr2) {
    const map1 = arr1.map(v => v.toString(2).padStart(n, "0"));
    const map2 = arr2.map(v => v.toString(2).padStart(n, "0"));
    
    

    const answer = Array(n).fill(0).reduce((acc, cur, i)=>{
        const line1 = map1[i];
        const line2 = map2[i];
        
        acc.push(Array(n).fill(0).map((_, i)=> {
            return !+line1[i] && !+line2[i] ? " " : "#";
        }).join(""));
        
        return acc;
    }, []);
    
    
    return answer;
}