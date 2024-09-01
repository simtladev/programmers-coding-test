function solution(my_string, index_list) {
   
    const answer = index_list.reduce((str, cur)=>{
       return str + my_string[cur];
    },"");
    
    return answer;
}