function solution(arr) {
    const stk = [];
    let i = 0;
    
    
    while(i < arr.length){
        const currentItem = arr[i];
        
        if(!stk.length){
            stk.push(currentItem);
            i++;
            continue;
        }
        
        const stkLastItem = stk[stk.length - 1];
        if(stkLastItem < currentItem){
            stk.push(currentItem);
            i++;
        }else{
            stk.pop();
        }
        
    }
    
    return stk;
}