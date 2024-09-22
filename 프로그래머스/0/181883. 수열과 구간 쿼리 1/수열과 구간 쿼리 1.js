function solution(arr, queries) {
    const result =  queries.reduce((acc, [s, e])=> 
        acc.map((value, i)=> s <= i && i <= e ? ++value : value),arr);
    

    return result;
}