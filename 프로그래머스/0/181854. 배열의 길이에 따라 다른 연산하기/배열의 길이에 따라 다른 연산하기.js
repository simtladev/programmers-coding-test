function solution(arr, n) {
    const answer = arr.map((v, i)=> arr.length % 2 !== i % 2 ? v +n : v)
    return answer;
}