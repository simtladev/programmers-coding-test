function solution(arr, idx) {

    // const slicedArr = arr.slice(idx);
    const result = arr.findIndex((v, i)=> i >= idx  && v === 1);
    
    
    
    return result;
}