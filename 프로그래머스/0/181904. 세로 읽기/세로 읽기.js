function solution(my_string, m, c) {
    let result = "";
    
    for(let i =m; i <= my_string.length; i+=m){
        result +=my_string.slice(i - m, i)[c - 1];
    }
    
    
    return result;
}