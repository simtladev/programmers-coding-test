function solution(clothes) {
    const clothesCountByType = clothes.reduce((acc, [dress, type])=> 
                    (acc[type] ? acc[type]++ : acc[type] = 1, acc), {});
    
    
    let answer = 1;
    
    for(const key in clothesCountByType) {
        answer *= (clothesCountByType[key] + 1);
    }
    
    return answer - 1;
}