function solution(my_string) {
    
    const answer = [...my_string].map((v)=> isNaN(+v) ? "@" : v).join("").split("@").filter((v)=> v !=="").reduce((acc ,cur)=> acc + +cur, 0);
    
    
    // const answer = [...my_string].reduce((acc, cur)=> {
    //     return isNaN(+cur) ? acc : acc + +cur
    // },0);
    return answer;
}