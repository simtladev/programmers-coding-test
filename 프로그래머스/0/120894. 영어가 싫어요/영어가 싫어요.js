const numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function solution(numbers) {
    
    const answer = numberArr.reduce((acc,cur,i)=>{
        return acc.replaceAll(cur, i);
    },numbers)

    
    return +answer;
}