function solution(phone_number) {
    const answer = [...phone_number];
    answer.splice(0, phone_number.length - 4 ,"*".repeat(phone_number.length - 4))
    return answer.join("");
}