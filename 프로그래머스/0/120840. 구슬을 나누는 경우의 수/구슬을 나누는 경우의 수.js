function factory(f) {
    return Array(f).fill(0).reduce((acc, _, i) => {
        return acc * (i + 1);
    }, 1); 
}

function solution(balls, share) {

    const answer = Math.round(factory(balls) / (factory((balls - share)) * factory((share))));
    return answer;
}