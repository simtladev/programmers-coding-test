function solution(arr, k) {
    const answer = arr.map((v)=> k % 2 === 0 ? v + k : v * k);
    return answer;
}