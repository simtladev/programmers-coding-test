function solution(A, B) {
    if (A.length !== B.length) return -1;
    const combined = B + B;
    const index = combined.indexOf(A);
    return index !== -1 ? index : -1;
}

// let solution=(a,b)=>(b+b).indexOf(a)
