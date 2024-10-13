function solution(s){
    const answer = [...s].filter((v)=> v.toLowerCase() === "p").length === [...s].filter((v)=> v.toLowerCase() === "y").length ? true : false;


    return answer;
}