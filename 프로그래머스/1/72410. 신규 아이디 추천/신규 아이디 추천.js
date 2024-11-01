function solution(new_id) {
    let answer = new_id.toLowerCase()
                .replace(/[^a-z0-9._-]/g, '')
                .replace(/\.{2,}/g, '.')
                .replace(/^\.|\.$/g, '')
                .replace(/^$/, 'a')
                .slice(0, 15).replace(/\.$/, '')
    
    
    return answer.length <=2 ? answer.padEnd(3, answer[answer.length - 1]) : answer;
}