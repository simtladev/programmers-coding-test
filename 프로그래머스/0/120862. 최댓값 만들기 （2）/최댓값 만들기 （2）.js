function solution(numbers) {
    const sortedNumbers = numbers.sort((a,b)=> a - b);
    const [a,b] = sortedNumbers.slice(0,2);
    const [c,d] = sortedNumbers.slice(sortedNumbers.length - 2,sortedNumbers.length);
    
    return Math.max(a * b, c * d);
}