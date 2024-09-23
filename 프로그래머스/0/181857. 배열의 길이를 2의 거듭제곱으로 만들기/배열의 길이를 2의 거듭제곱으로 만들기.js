function solution(arr) {
    let po = 1;
    
    while(arr.length > po){
        po = po * 2;
    }
    
    
    return [...arr, ...Array(po - arr.length).fill(0)];
}


