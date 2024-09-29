function solution(my_string) {
    var answer = [...my_string].reduce((acc, cur)=> isNaN(cur) ? acc : acc + +cur, 0);
    return answer;
}