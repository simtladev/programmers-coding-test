function solution(arr, queries) {
  const answer = [...arr];
  queries.forEach(([i, j]) => {
      [answer[i], answer[j]] = [answer[j], answer[i]];
  });

  return answer;
}
