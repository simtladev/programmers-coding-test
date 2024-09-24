function solution(arr, delete_list) {
    const answer = arr.filter((v)=> !delete_list.includes(v));
    return answer;
}