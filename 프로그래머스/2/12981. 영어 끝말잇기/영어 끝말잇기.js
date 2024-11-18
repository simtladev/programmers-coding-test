function solution(n, words) {
    const answer = [];
    const usedWords = [];
   
    for(let i = 0; i < words.length; i++){
        const userIdx = i % n;
        const currentWord = words[i];
        const beforeWord = words[i - 1];
        if(usedWords.includes(currentWord) || (beforeWord && beforeWord.slice(-1) !== currentWord.slice(0,1))){
            answer.push(i % n + 1, Math.floor(i / n) + 1);
            break;
        }
        
        usedWords.push(currentWord);
    }
    
    if(!answer.length){
        answer.push(0, 0);
    }
    
    
    return answer;
}