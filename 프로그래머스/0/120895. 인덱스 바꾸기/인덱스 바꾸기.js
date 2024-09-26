function solution(my_string, num1, num2) {
    const answer = [...my_string];
    const a = my_string.slice(num1, num1 +1);
    const b = my_string.slice(num2, num2 +1);
    answer[num1] = b;
    answer[num2] = a;


    return answer.join("");
}