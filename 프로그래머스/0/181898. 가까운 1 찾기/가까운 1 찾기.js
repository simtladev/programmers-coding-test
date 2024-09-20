function solution(arr, idx) {

    const slicedArr = arr.slice(idx);
    const index = slicedArr.findIndex((v)=> v === 1);
    
    if(index === -1){
        return index;
    }
    
    return index + idx;
}