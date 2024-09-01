function solution(my_string, is_suffix) {
   const answer = [];
    
    my_string.split("").reverse().forEach((item)=>{
        if(!answer.length) {
            answer.push(item);
        }
        else{
            const word = item + answer[answer.length-1];
            answer.push(word);
        }
    });
    
    return answer.find((str)=> str === is_suffix) ? 1 : 0
}