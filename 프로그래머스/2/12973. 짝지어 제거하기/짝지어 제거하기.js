function solution(s)
{
    const stack = [];
    
    for(const word of s){
        if(stack[stack.length - 1] === word) {
            stack.pop();
        }else{
            stack.push(word);
        }
    }
    
    
    
    return !!stack.length ? 0 : 1;
}
