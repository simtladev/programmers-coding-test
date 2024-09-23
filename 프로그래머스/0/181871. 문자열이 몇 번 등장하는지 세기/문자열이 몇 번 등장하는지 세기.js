function solution(myString, pat) {
    let count = 0;
    const answer = [...myString].forEach((_, i)=>{
        const str = myString.slice(i, i + pat.length);

        if(pat === str){     
            count++;
        }
    });
    return count;
}