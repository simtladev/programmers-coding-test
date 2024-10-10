function solution(n)
{
    const answer = [...n.toString()].reduce((acc, cur)=> acc + +cur, 0);

    return answer;
}