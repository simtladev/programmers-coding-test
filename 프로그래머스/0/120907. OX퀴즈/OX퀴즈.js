const operator = {
    "-" : (a, b) => a - b,
    "+" : (a, b) => a + b,    
}



function solution(quiz) {
    const answer = quiz.reduce((acc, cur)=>{
        const [x,op,y,_,z] = cur.split(" ");
        const isAnswer = operator[op](+x, +y) === +z;
        isAnswer ? acc.push("O") : acc.push("X");
        return acc;
    },[]);
    return answer;
}