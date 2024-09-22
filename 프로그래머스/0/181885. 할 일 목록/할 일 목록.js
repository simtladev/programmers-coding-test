function solution(todo_list, finished) {
    const answer = todo_list.filter((_, i)=> !finished[i]);
    return answer;
}