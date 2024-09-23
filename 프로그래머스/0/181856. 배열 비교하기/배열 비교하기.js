function solution(arr1, arr2) {
    
    
    if(arr1.length > arr2.length){
        return 1;
    }
    
    if(arr1.length < arr2.length){
        return -1;
    }
    
     const value1  = arr1.reduce((acc, v)=> acc + v);
     const value2  = arr2.reduce((acc, v)=> acc + v);
    
    
    if(value1 > value2){
        return 1;
    }
    
    if(value1 < value2){
        return -1;
    }
    
    
    
    return 0;
}