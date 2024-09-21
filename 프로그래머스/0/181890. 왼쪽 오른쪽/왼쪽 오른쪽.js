function solution(str_list) {
//     const lIndex = str_list.indexOf("l");
//     const rIndex = str_list.indexOf("r");
    
//     if(lIndex === -1 || rIndex === -1) return [];
    
    
//     const answer = lIndex < rIndex ? str_list.slice(0, lIndex) : str_list.slice(rIndex + 1);
    
    
//     return answer;
    
     const index = str_list.findIndex(item => item === 'l' || item === 'r');
    
  
        if(index === -1){
        return [];
        }

        else if(str_list[index] === 'l') {
        return str_list.slice(0, index);    
        } 

        else {
        return str_list.slice(index + 1);
        }
}