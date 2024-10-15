function solution(arr1, arr2) {
    var answer = arr1.reduce((acc, cur, i)=>{
        acc.push(cur.map((v, j)=> v + arr2[i][j]));
        return acc;
    },[]);
    return answer;
}