function solution(array, height) {
    const answer = array.filter((v)=> v > height).length;
    return answer;
}