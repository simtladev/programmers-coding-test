function solution(ingredient) {
    const stack = [];
    const answer = ingredient.reduce((acc, cur) => {
        stack.push(cur);
        if(stack.length >= 4){
            const burger = stack.slice(-4).join("");
            if (burger === '1231') {
                stack.splice(-4);
                acc += 1;
            }
        }
        return acc;
    }, 0);

    return answer;
}