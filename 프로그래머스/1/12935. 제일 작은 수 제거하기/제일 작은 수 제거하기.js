function solution(arr) {
    
    if(arr.length < 2) return [-1];
    // const [min] = [...arr].sort((a, b)=> a - b);
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
}