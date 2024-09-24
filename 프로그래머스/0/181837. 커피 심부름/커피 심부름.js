

function solution(order) {
    const answer = order.reduce((acc, cur)=> {
        if(cur.includes("cafelatte")){
            return acc += 5000;
        }
        return acc += 4500;
    },0)
    return answer;
}