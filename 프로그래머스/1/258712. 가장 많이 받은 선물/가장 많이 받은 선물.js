function solution(friends, gifts) {
    const len = friends.length;
    const userMap = new Map(friends.map((v, i)=>[v, i]));
    const giftHistoryTable = Array.from({length: len}, () => Array(len).fill(0));
    const giftIndices = Array(len).fill(0);
    
    
    for(const gift of gifts){
        const [to, from] = gift.split(" ");
        giftHistoryTable[userMap.get(to)][userMap.get(from)] += 1;
        giftIndices[userMap.get(to)] += 1;
        giftIndices[userMap.get(from)] -= 1;
    }
    
    
    const nextGifts = Array(len).fill(0);
    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            if(giftHistoryTable[i][j] > giftHistoryTable[j][i]) nextGifts[i]++;
            if(giftHistoryTable[i][j] < giftHistoryTable[j][i]) nextGifts[j]++;
            if(giftHistoryTable[i][j] === giftHistoryTable[j][i]){
                if(giftIndices[i] > giftIndices[j]) nextGifts[i]++;
                if(giftIndices[i] < giftIndices[j]) nextGifts[j]++;
            }
        }
    }
    
    return Math.max(...nextGifts);
}