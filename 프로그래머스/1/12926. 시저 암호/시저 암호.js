function solution(s, n) {
    return [...s].map((char) => {
        if (char === " ") return " ";

        const charCode = char.charCodeAt();
        const isLower = charCode >= 97 && charCode <= 122;
        const isUpper = charCode >= 65 && charCode <= 90;

        if (isLower) {
            return String.fromCharCode((charCode - 97 + n) % 26 + 97);
        } else if (isUpper) {
            return String.fromCharCode((charCode - 65 + n) % 26 + 65);
        }
        
        return char;
    }).join("");
}