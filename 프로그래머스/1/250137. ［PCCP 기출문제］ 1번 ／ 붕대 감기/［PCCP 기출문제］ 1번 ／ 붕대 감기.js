function solution(bandage, health, attacks) {
    const attackObject = Object.fromEntries(attacks);
    const lastRound = attacks[attacks.length - 1][0];
    const [casting, recovery, additionalRecovery] = bandage;
    let count = 0;
    let answer = health;
    
    for(let i = 1; i <= lastRound; i++){
        const currentAttack = attackObject[i];
        if(currentAttack){
            answer = answer - currentAttack;
            count = 0;
            if(answer <= 0){
                return -1;
            }
        }else{
            answer = Math.min(answer + recovery, health);
            count++;
            if(count === casting){
                answer = Math.min(answer + additionalRecovery, health);
                count = 0;
            }     
        }
    }

    return answer;
}