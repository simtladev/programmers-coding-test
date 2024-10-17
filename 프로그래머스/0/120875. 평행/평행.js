function solution(dots) {
    const [a,b,c,d] = dots;
    if(slope(a, b) === slope(c, d)){
        return 1;
    }
    
    if(slope(a, c) === slope(b, d)){
        return 1;
    }
    
    if(slope(a, d) === slope(b, c)){
        return 1;
    }
    
    
    return 0;
}

function slope(dot1, dot2){
    return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0])
}