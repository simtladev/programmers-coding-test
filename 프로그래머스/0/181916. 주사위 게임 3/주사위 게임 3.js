function solution(a, b, c, d) {
    const diceList = [a,b,c,d];
    const diceObject = diceList.reduce((arr, cur) => {
       arr[cur] = (arr[cur] || 0) + 1;
       return arr;
    }, {});
    
  
    const dice = Object.entries(diceObject).sort(([, a], [, b]) => b - a);
    const [[,maxDiceCount],] = dice;
    console.log(dice,maxDiceCount);
    
    // 다 같음
    if(maxDiceCount === 4){
        const [[p],] = dice;
        return 1111 * p;
    }
    
    // 다 다름
    if(maxDiceCount === 1){
        const [[p,],] = dice.sort(([a, ], [b, ]) => +a - +b);
        return +p;
    }
    
    // 한개만 같음
    if(maxDiceCount === 3){
        const [[p],[q]] = dice;
        return (10 * +p + +q) ** 2;
    }
    
    //2개씩 같음 || 한개만 같음
    if(maxDiceCount === 2){
        if(dice.length === 3){
            const [,[p],[q]] = dice;
            return p * q
            
        }else if(dice.length === 2){
            const [[p],[q]] = dice;
            return (+p + +q) * Math.abs(+p - +q)
        }
    }
    
    
    return [];
}