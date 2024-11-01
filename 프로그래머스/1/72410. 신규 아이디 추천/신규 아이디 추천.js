function solution(new_id) {
    let answer = new_id.toLowerCase()
                .replace(/[^a-z0-9._-]/g, '')
                .replace(/\.{2,}/g, '.')
                .replace(/^\.|\.$/g, '')
                .replace(/^$/, 'a');
    
    if (answer.length >= 16) {
        answer = answer.slice(0, 15).replace(/\.$/, '');
    }else if(answer.length <=2 ){
        answer = answer.padEnd(3, answer[answer.length - 1]);
    }
    
    return answer;
}