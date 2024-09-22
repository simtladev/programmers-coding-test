function solution(arr) {
    let arr1 = [...arr];
    let arr2 = [];
    let count = 0;
    
    while(JSON.stringify(arr1) !== JSON.stringify(arr2)){
        arr2 = [...arr1];
        
        const v = arr1.map((value)=> {
            if(value >= 50 && value % 2 === 0){
                return value / 2;
            }
            if(value < 50 && value % 2 !== 0){
                return value * 2 + 1;
            }
            return value;
        });
        
        arr1 = [...v];
        count++;
    }
    

    
    return count -1 ;
}