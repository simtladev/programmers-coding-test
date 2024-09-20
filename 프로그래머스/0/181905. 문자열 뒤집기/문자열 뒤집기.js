function solution(my_string, s, e) {

    
    
    const a = my_string.slice(s, e + 1).split("").reverse().join("");
    const b = [...my_string];
    b.splice(s, e - s + 1, a);
    
    const answer = b.join("")
    
    return answer;
}



// Progra 21Sremm 3

// Progra 21Srem  m3
// 6 12


