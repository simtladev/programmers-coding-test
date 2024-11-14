function solution(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = BigInt(0), b = BigInt(1), result;
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result % BigInt(1234567);
}