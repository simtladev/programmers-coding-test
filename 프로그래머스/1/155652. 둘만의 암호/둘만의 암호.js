function solution(s, skip, index) {
    var answer = [...s].map((v) => {
        let next = 0;
        let currentCharCode = v.charCodeAt();

        while (next < index) {
            currentCharCode++;
            if (currentCharCode > 122) currentCharCode = 97;
            if (!skip.includes(String.fromCharCode(currentCharCode))) {
                next++;
            }
        }

        return String.fromCharCode(currentCharCode);
    }).join("");

    return answer;
}
