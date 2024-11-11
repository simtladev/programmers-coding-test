function solution(numbers, hand) {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    let leftThumb = "*";
    let rightThumb = "#";
    
    
    const answer = numbers.reduce((result, number)=>{
        
        if([1,4,7].includes(number)){
            result += "L";
            leftThumb = number;
        }else if([3,6,9].includes(number)){
            result += "R";
            rightThumb = number;
        }else {
            const leftDistance = Math.abs(keyPad[leftThumb][0] - keyPad[number][0]) +
                                 Math.abs(keyPad[leftThumb][1] - keyPad[number][1]);
            
            const rightDistance = Math.abs(keyPad[rightThumb][0] - keyPad[number][0]) +
                                  Math.abs(keyPad[rightThumb][1] - keyPad[number][1]);
            
            if (leftDistance < rightDistance) {
                result += "L";
                leftThumb = number;
            } else if (rightDistance < leftDistance) {
                result += "R";
                rightThumb = number;
            } else {
                if (hand === "left") {
                    result += "L";
                    leftThumb = number;
                } else {
                    result += "R";
                    rightThumb = number;
                }
            }
        }
        return result;
    },"");
    return answer;
}