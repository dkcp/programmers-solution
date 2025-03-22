function solution(n, q, ans) {
  var answer = 0;

  for(let i=0; i<q.length; i++){
    console.log(`${q[i]} 입력... 비밀코드와 ${ans[i]}개 일치`)
  }

  return answer;
}

// 비밀코드는 오름차순 정수 5개
const n = 10;
const q = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [3, 7, 8, 9, 10], [2, 5, 7, 9, 10], [3, 4, 5, 6, 7]];
const ans = [2, 3, 4, 3, 3];

solution(n, q, ans);

//15	[[2, 3, 9, 12, 13], [1, 4, 6, 7, 9], [1, 2, 8, 10, 12], [6, 7, 11, 13, 15], [1, 4, 10, 11, 14]]	[2, 1, 3, 0, 1]	5