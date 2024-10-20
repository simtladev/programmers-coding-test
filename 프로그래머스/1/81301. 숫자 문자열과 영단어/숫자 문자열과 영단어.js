const words = ["zero","one","two","three","four","five","six","seven","eight","nine"];


function solution(s) {
    const answer = +words.reduce((acc, cur, i)=>{
        return acc.replaceAll(cur, i.toString());
    }, s)
    return answer;
}