function solution(dot) {
    var [x, y] = dot;
    
    const isSignX  = Math.sign(x) !== -1;
    const isSignY = Math.sign(y) !== -1;
    
    
    if(isSignX && isSignY) return 1;
    if(!isSignX && isSignY) return 2;
    if(!isSignX && !isSignY) return 3;
    if(isSignX && !isSignY) return 4;
    
}