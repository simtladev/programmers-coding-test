function solution(before, after) {
//     const afterArr = [...after]
//     const answer = [...before].every((v)=>{
//         const currentIndex = afterArr.indexOf(v);
//         if(currentIndex !== -1){
//            afterArr.splice(currentIndex, 1);
//            return true; 
//         }
//         return false;
//     });


//     return answer ? 1 : 0; 
    
    const answer = [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
    
    return answer;
    
}