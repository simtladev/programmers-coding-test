function solution(arr) {
    const answer = arr.map((v)=>  arr.length > v.length ? [...v, ...Array(arr.length - v.length).fill(0)] : v);
    
    if(arr[0].length > arr.length){
        answer.push(...Array(arr[0].length - arr.length).fill(Array(arr[0].length).fill(0)));
    }
    return answer;
}