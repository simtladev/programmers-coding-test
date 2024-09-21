function solution(my_string) {
    
  
    const zeros = Array(52).fill(0);
    
    const result = [...my_string].reduce((acc, value)=>{
        
        const alpha = value.charCodeAt(0);
        
        if(alpha>=65 && alpha<=90){ 
            //대문자
            acc[alpha-65]++;
        }else{
            //소문자
            acc[alpha-71]++;
        }
        
        return acc;
    },zeros)
    
    console.log(result);
    
    
    
    return result;
}