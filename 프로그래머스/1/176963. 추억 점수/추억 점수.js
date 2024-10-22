function solution(name, yearning, photo) {
    const scoreObj = name.reduce((acc, cur, index) => {
        acc[cur] = yearning[index];
        return acc;
    }, {});
    
    
    const answer = photo.map((person)=>{
        return person.reduce((acc, cur)=> acc + (scoreObj[cur] ?? 0), 0)
    },[]);
    
    return answer;
}