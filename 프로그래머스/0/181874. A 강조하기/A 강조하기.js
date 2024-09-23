function solution(myString) {
    const answer = [...myString].map((v)=> {
        if(v === "a"){
           return v.toUpperCase(); 
        }
        if(v !== "A"){
            return v.toLowerCase();
        }
         return v;
    }).join("");
    return answer;
}