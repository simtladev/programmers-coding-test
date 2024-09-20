function solution(n, k) {
    const result = Array(n).fill(1).map((v,i)=> v + i).filter((v)=> v % k === 0);
    return result;
}