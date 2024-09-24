function solution(str_list, ex) {
    const answer = str_list.filter((v)=> !v.includes(ex)).join("")

    return answer;
}