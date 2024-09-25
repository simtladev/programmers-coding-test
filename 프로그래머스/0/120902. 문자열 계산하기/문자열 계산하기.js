function solution(my_string) {
   const arr = my_string.split(' ')
    
    let answer = arr[0]*1;
    
    for(let i =1 ; i < arr.length; i++){
        if(arr[i] ==='+'){
            answer += arr[i+1]*1
        }else if(arr[i]==='-'){
            answer -= arr[i+1]*1
        }
    }

    return answer;
}