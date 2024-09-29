function solution(array, n) {
    const answer = array.filter((v)=> v === n).length;
    return answer;
}