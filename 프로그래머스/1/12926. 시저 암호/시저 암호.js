function solution(s, n) {
    var answer = [...s].map((v)=> {
        if(v === " ") return " ";
        
        // 소문자
        if(v.charCodeAt() >= 97 && v.charCodeAt() <= 122){
            const a = (v.charCodeAt() + n) % 123 < 97 ? (v.charCodeAt() + n) % 123 + 97 : (v.charCodeAt() + n) % 123
            
            return String.fromCharCode(a);
        }else{
            const b = (v.charCodeAt() + n) % 91 < 65 ? (v.charCodeAt() + n) % 91 + 65 : (v.charCodeAt() + n) % 91
            
            return String.fromCharCode(b);
        }
  
    }).join("");
    return answer;
}