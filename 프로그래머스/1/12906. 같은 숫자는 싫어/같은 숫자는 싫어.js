function solution(arr){
    const answer = arr.filter((v, i)=> v !== arr[i - 1]);
    return answer;
}