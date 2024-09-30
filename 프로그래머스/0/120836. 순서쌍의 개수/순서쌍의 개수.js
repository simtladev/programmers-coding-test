function solution(n) {
   const answer = Array.from({length: n}, (_, i)=>{
       return i + 1;
   }).filter((v)=> n % v === 0).length;
   return answer;
}