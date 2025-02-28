// 큰 수 만들기
// function solution(number, k) {
//     const stack = [];
//     let removeCount = k;

//     for (let num of number) {
//         while (removeCount > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
//             stack.pop();
//             removeCount--;
//         }
//         stack.push(num);
//     }

//     while (removeCount > 0) {
//         stack.pop();
//         removeCount--;
//     }

//     return stack.join('');
// }

// console.log(solution('87654321', 4));

// 연속된 부분 수열의 합
// function solution(sequence, k) {
//     var answer = [0, 1000000];

//     let start = 0, end;
//     let sum = 0;
//     for(let i=0; i<sequence.length; i++){
//         end = i;
//         sum+=sequence[i];
//         while(sum>k){
//             sum-=sequence[start];
//             start++;
//         }
//         if(sum===k){
//             if(end-start<answer[1]-answer[0]){
//                 answer[0] = start;
//                 answer[1] = end;
//             }
//         }
//     }

//     return answer;
// }

// console.log(solution([2, 2, 2, 2, 2], 6));

// [1, 3, 6, 10, 15]

function getRadian(degree) {
    return (degree * Math.PI) / 180;
}

// 두 큐 합 같게 만들기
// 한 큐에서 shift, 다른 큐로 push > 1회, 총 최소 횟수 구하기기
// function solution(queue1, queue2) {
//     var answer = 0;

//     let sum1 = BigInt(queue1.reduce((acc, cur) => acc + cur));
//     let sum2 = BigInt(queue2.reduce((acc, cur) => acc + cur));
//     let start1 = 0;
//     let start2 = 0;

//     while(sum1!==sum2){
//         answer++;
//         if(sum1>sum2){
//             let x = queue1[start1];
//             start1++;
//             sum1 -= BigInt(x);
//             queue2.push(x);
//             sum2 += BigInt(x);
//         }else {
//             let x = queue2[start2];
//             start2++;
//             sum2 -= BigInt(x);
//             queue1.push(x);
//             sum1 += BigInt(x);
//         }

//         if(answer>300000){
//             return -1;
//         }
//     }

//     return answer;
// }

// console.log(solution([6,7,4], [7,9,9]));

// 무인도 여행
// 지도에는 바다(X), 무인도(1~9, 식량)
// function solution(maps) {
//     var answer = [];
//     var visited = [];
//     for(let i=0; i<maps.length; i++) visited[i] = new Array(maps[0].length).fill(0);

//     for(let i=0; i<maps.length; i++){
//         for(let j=0; j<maps[0].length; j++){
//             if(maps[i][j]!=='X' && visited[i][j]===0){
//                 let food = 0;
//                 food = calcFood(i, j, food);
//                 answer.push(food);
//             }
//         }
//     }

//     function calcFood(i, j, food){
//         visited[i][j] = 1;
//         food += Number(maps[i][j]);
//         if(i+1<maps.length && maps[i+1][j]!=='X' && visited[i+1][j]===0) food = calcFood(i+1, j, food);
//         if(j+1<maps[0].length && maps[i][j+1]!=='X' && visited[i][j+1]===0) food = calcFood(i, j+1, food);
//         if(i-1>=0 && maps[i-1][j]!=='X' && visited[i-1][j]===0) food = calcFood(i-1, j, food);
//         if(j-1>=0 && maps[i][j-1]!=='X' && visited[i][j-1]===0) food = calcFood(i, j-1, food);
//         return food;
//     }

//     if(answer.length===0) return [-1];

//     return answer.sort((a,b)=>a-b);
// }

// console.log(solution(["X591X","X1X5X","X231X", "1XXX1"]))

// 삼각달팽이이
// function solution(n) {
//   let a = Array(n).fill().map((_, i) => Array(i + 1).fill())
//   let row = -1
//   let col = 0
//   let fill = 0
//   for (let i = n; i > 0; i -= 3) {
//     a[++row][col] = ++fill
//     for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
//     for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
//     for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
//   }
//   return a.flat()
// }

// 행렬 테두리 회전하기
// function solution(rows, columns, queries) {
//     var answer = [];

//     let arr = [];
//     for(let i=0; i<rows; i++){
//         arr[i] = [];
//         for(let j=0; j<columns; j++){
//             arr[i][j] = i*columns+j+1;
//         }
//     }

//     queries.forEach(query => {
//         let [x1, y1, x2, y2] = query;
//         x1--; x2--; y1--; y2--;

//         let start = arr[x1][y1];
//         let min = start;
//         for(let i=x1; i<=x2-1; i++){
//             arr[i][y1] = arr[i+1][y1];
//             min = Math.min(min, arr[i][y1]);
//         }
//         for(let j=y1; j<=y2-1; j++){
//             arr[x2][j] = arr[x2][j+1];
//             min = Math.min(min, arr[x2][j]);
//         }
//         for(let i=x2; i>=x1+1; i--){
//             arr[i][y2] = arr[i-1][y2];
//             min = Math.min(min, arr[i][y2]);
//         }
//         for(let j=y2; j>=y1+1; j--){
//             arr[x1][j] = arr[x1][j-1];
//             min = Math.min(min, arr[x1][j]);
//         }
//         arr[x1][y1+1] = start;
//         answer.push(min);
//     });

//     return answer;
// }

// let test = [[1,1,100,97]];

// console.log(solution(100, 97, test));

// 전력망을 둘로 나누기
// function solution(n, wires) {
//     var answer = -1;

//     var grid = {};

//     for(let wire of wires){
//         if(!grid[wire[0]]) grid[wire[0]] = [];
//         if(!grid[wire[1]]) grid[wire[1]] = [];
//         grid[wire[0]].push(wire[1]);
//         grid[wire[1]].push(wire[0]);
//     }

//     for(let wire of wires){
//         let left = wire[0];
//         let right = wire[1];

//         let leftCount = countNode(left, right, 0);
//         let rightCount = countNode(right, left, 0);

//         let diff = Math.abs(leftCount-rightCount);

//         if(answer===-1) answer = diff;
//         else answer = Math.min(answer, diff);
//     }

//     function countNode(currentNode, previousNode, count){
//         count++;
//         var connectedNodes = grid[currentNode];
//         if(connectedNodes.length===1) return count;
//         for(let nextNode of connectedNodes){
//             if(nextNode === previousNode) continue;
//             count = countNode(nextNode, currentNode, count);
//         }
//         return count;
//     }

//     return answer;
// }

// console.log(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]));

// 호텔 대실
// function solution(book_time) {
//     var answer = 0;

//     var rooms = [];

//     book_time = book_time.sort((a,b)=> {
//         if(a[0].split(':')[0] - b[0].split(':')[0]>0){
//             return 1;
//         }else if(a[0].split(':')[0] - b[0].split(':')[0]<0){
//             return -1;
//         }else {
//             if(a[0].split(':')[1] - b[0].split(':')[1]>0) return 1;
//             else return -1;
//         }
//     });

//     book_time.forEach(time => {
//         let [startH, startM] = time[0].split(':');
//         let start = startH*60 + startM*1;
//         let [endH, endM] = time[1].split(':');
//         let end = endH*60 + endM*1 + 10;

//         let isNew = true;
//         for(let i=0; i<rooms.length; i++){
//             if(start>=rooms[i]){
//                 rooms[i] = end;
//                 isNew = false;
//                 break;
//             }
//         }
//         if(isNew){
//             answer++;
//             rooms.push(end);
//         }
//     });

//     return answer;
// }

// console.log(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]));

// 점 찍기
// function solution(k, d) {
//     var answer = 0;

//     d /= k;
//     k = 1;

//     for(let x=0; x<=d; x++){
//         answer += Math.floor(Math.sqrt(d*d-x*x))+1;
//     }

//     return answer;
// }

// console.log(solution(1, 1000000));

// ★★★★★ 배달 ★★★★★ 다익스트라 ★★★★★
// N개의 마을 중 1번마을부터 road 경로를 통해 K 보다 적게 걸리는 마을의 수 출력
// road는 두 마을의 번호와 걸리는 시간
// function solution2(N, road, K) {
//     var answer = 0;

//     let adjGraph = {};
//     for(let r of road){
//         let dist = r[2];

//         let src = r[0];
//         let dst = r[1];
//         if(!adjGraph[src]) adjGraph[src] = {};
//         if(adjGraph[src][dst]){
//             adjGraph[src][dst] = Math.min(adjGraph[src][dst], dist);
//         }else adjGraph[src][dst] = dist;

//         src = r[1];
//         dst = r[0];
//         if(!adjGraph[src]) adjGraph[src] = {};
//         if(adjGraph[src][dst]){
//             adjGraph[src][dst] = Math.min(adjGraph[src][dst], dist);
//         }else adjGraph[src][dst] = dist;
//     }

//     class PriorityQueue {
//         constructor(){
//             this.collection = [];
//         }

//         enqueue(element){
//             if(this.isEmpty()) this.collection.push(element);
//             else {
//                 let added = false;
//                 for(let i=0; i<this.collection.length; i++){
//                     if(element[1]<this.collection[i][1]){
//                         this.collection.splice(i, 0, element);
//                         added = true;
//                         break;
//                     }
//                 }
//                 if(!added) this.collection.push(element);
//             }
//         }

//         dequeue(element){
//             return this.collection.shift();
//         }

//         isEmpty(){
//             return this.collection.length===0;
//         }
//     }

//     function dijkstra(graph, startNode){
//         let distances = {};
//         let pq = new PriorityQueue();

//         for(let node in graph){
//             distances[node] = 10000;
//             pq.enqueue([node, 10000]);
//         }
//         distances[startNode] = 0;
//         pq.enqueue([startNode, 0]);

//         while(!pq.isEmpty()){
//             let shortestStep = pq.dequeue();
//             let currentNode = shortestStep[0];

//             for(let neighbor in graph[currentNode]){
//                 let distance = graph[currentNode][neighbor];
//                 let alt = distance + distances[currentNode];

//                 if(alt<distances[neighbor]){
//                     distances[neighbor] = alt;
//                     pq.enqueue([neighbor, distances[neighbor]]);
//                 }
//             }
//         }

//         console.log(distances);
//         return distances;
//     }

//     console.log(Object.values(dijkstra(adjGraph, '1')));
//     return Object.values(dijkstra(adjGraph, '1')).filter(v=>v<=K).length;
// }

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     push(value) {
//         this.heap.push(value);
//         let idx = this.heap.length - 1;
//         while (idx > 0) {
//             const parentIdx = Math.floor((idx - 1) / 2);
//             if (this.heap[parentIdx][1] <= this.heap[idx][1]) break;
//             [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
//             idx = parentIdx;
//         }
//     }

//     pop() {
//         if (this.heap.length <= 1) return this.heap.pop();
//         const top = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         let idx = 0;

//         while (true) {
//             const leftIdx = 2 * idx + 1;
//             const rightIdx = 2 * idx + 2;
//             let smallest = idx;

//             if (leftIdx < this.heap.length && this.heap[leftIdx][1] < this.heap[smallest][1]) smallest = leftIdx;
//             if (rightIdx < this.heap.length && this.heap[rightIdx][1] < this.heap[smallest][1]) smallest = rightIdx;

//             if (smallest === idx) break;
//             [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
//             idx = smallest;
//         }

//         return top;
//     }

//     isEmpty() {
//         return this.heap.length === 0;
//     }
// }

// function solution3(N, road, K) {
//     const INF = 10000;
//     const graph = Array.from({ length: N + 1 }, () => []);

//     road.forEach(([a, b, c]) => {
//         graph[a].push([b, c]);
//         graph[b].push([a, c]);
//     });

//     const dijkstra = (start) => {
//         const dist = Array(N + 1).fill(INF);
//         dist[start] = 0;

//         const pq = new MinHeap();
//         pq.push([start, 0]);

//         while (!pq.isEmpty()) {
//             const [current, currentDist] = pq.pop();

//             if (currentDist > dist[current]) continue;

//             graph[current].forEach(([next, weight]) => {
//                 const nextDist = currentDist + weight;
//                 if (nextDist < dist[next]) {
//                     dist[next] = nextDist;
//                     pq.push([next, nextDist]);
//                 }
//             });
//         }

//         return dist;
//     };

//     const distances = dijkstra(1);
//     return distances.filter((d) => d <= K).length;
// }

// function solution(N, road, K) {
//     const INF = Infinity;
//     const graph = Array.from({ length: N + 1 }, () => []);

//     road.forEach(([a, b, c]) => {
//         graph[a].push([b, c]);
//         graph[b].push([a, c]);
//     });

//     const dijkstra = (start) => {
//         const dist = Array(N + 1).fill(INF);
//         dist[start] = 0;

//         const pq = [[start, 0]]; // [노드, 거리]
//         while (pq.length > 0) {
//             const [current, currentDist] = pq.shift();

//             if (currentDist > dist[current]) continue;

//             graph[current].forEach(([next, dist]) => {
//                 const nextDist = currentDist + dist;
//                 if (nextDist < dist[next]) {
//                     dist[next] = nextDist;
//                     pq.push([next, nextDist]);
//                     pq.sort((a, b) => a[1] - b[1]);
//                 }
//             });
//         }

//         return dist;
//     };

//     const distances = dijkstra(1);
//     return distances.filter((d) => d <= K).length;
// }

// console.log(solution(8, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1], [2,7,2], [8,7,2]], 4))

// 마법의 엘리베이터
// function solution(storey) {
//     var answer = 0;

//     var strrey = Array.from(storey.toString()).map(a=>a*1);

//     for (let i = strrey.length - 1; i >= 0; i--) {
//         if (strrey[i] < 5) {
//             answer += strrey[i];
//         } else if (strrey[i] === 5) {
//             answer += 5;
//             if(i>0 && strrey[i-1]>=5){
//                 strrey[i-1]++;
//             }
//         } else {
//             answer += (10-strrey[i]);
//             if(i>0) {
//                 strrey[i-1]++;
//             }else{
//                 answer+=1;
//             }
//         }
//     }

//     return answer;
// }

// console.log(solution(7));

// 테이블 해시 함수
// function solution(data, col, row_begin, row_end) {
//     var answer = -1;

//     data = data.sort((a, b) => {
//         if(a[col - 1]>b[col - 1]) return 1;
//         else if(a[col-1]===b[col-1]) {
//             if(a[0]<b[0]) return 1;
//             else return -1;
//         }else return -1;
//     });

//     let hash = -1;
//     for(let i=row_begin-1; i<=row_end-1; i++){
//         let S_i = 0;
//         for(let v of data[i]) S_i += v%(i+1);
//         if(answer===-1) answer = S_i;
//         else answer ^= S_i;
//     }

//     return answer;
// }

// let test = [[2,2,6],[1,5,10],[4,2,9],[3,8,3]];
// console.log(solution(test,2,2,3));

// 시소 짝궁
// function solution(weights) {
//     var answer = 0;
//     var counter = Array(1001).fill(0);
//     for (let i = 0; i < weights.length; i++) {
//         counter[weights[i]]++;
//     }

//     for(let i=100; i<=1000; i++){
//         if(counter[i]>0){
//             answer += (counter[i])*(counter[i]-1)/2;
//             if(i%2===0 && i*3<=2000) answer += counter[i]*counter[i*3/2];
//             if(i*2<=1000) answer += counter[i]*counter[i*2];
//             if(i%3===0 && i*4<=3000) answer += counter[i]*counter[i*4/3];
//         }
//     }

//     return answer;
// }

// function solution2(weights) {
//     var answer = 0;

//     for (let l = 0; l < weights.length; l++) {
//         let left = weights[l];
//         for (let r = l + 1; r < weights.length; r++) {
//             let right = weights[r];
//             if (
//                 left === right ||
//                 left * 2 === right * 3 ||
//                 left * 3 === right * 2 ||
//                 left === right * 2 ||
//                 left * 2 === right ||
//                 left * 3 === right * 4 ||
//                 left * 4 === right * 3
//             ) {
//                 //console.log(`{${left}, ${right}}`);
//                 answer++;
//             }
//         }
//     }

//     return answer;
// }

// let test = [100,180,360,100,270];
// let test2 = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 901) + 100);
// console.log(solution(test2));
// console.log(solution2(test2));

// 거리두기 확인하기
// 응시자 P
// 빈 테이블 O
// 파티션 X
// function solution(places) {
//     var answer = [];

//     for (const place of places) {
//         var pCount = 0;
//         bp: for (let i = 0; i < 5; i++) {
//             for (let j = 0; j < 5; j++) {
//                 if (place[i][j] === "P") {
//                     pCount = checkDist(i, j, place, 0, 2);
//                     if (pCount > 0) break bp;
//                 }
//             }
//         }
//         answer.push(pCount > 0 ? 0 : 1);
//     }

//     function checkDist(i, j, place, dir, dist) {
//         let count = 0;
//         if (dist !== 2) {
//             if (place[i][j] === "X") return 0;
//             if (place[i][j] === "P") return 1;
//             if (dist === 0) return 0;
//         }
//         if (dir !== 3 && i + 1 < 5) count += checkDist(i + 1, j, place, 1, dist - 1);
//         if (dir !== 4 && j + 1 < 5) count += checkDist(i, j + 1, place, 2, dist - 1);
//         if (dir !== 1 && i - 1 >= 0) count += checkDist(i - 1, j, place, 3, dist - 1);
//         if (dir !== 2 && j - 1 >= 0) count += checkDist(i, j - 1, place, 4, dist - 1);

//         return count;
//     }

//     return answer;
// }

// let places = [
//     ["POOPP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
//     ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//     ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//     ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
//     ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
// ];

// 숫자 카드 나누기
// function solution(arrayA, arrayB) {
//     return Math.max(getA(getDivisor(arrayB), arrayA), getA(getDivisor(arrayB), arrayA));
// }

// function getDivisor(nums) {
//     let a = 0;
//     let arr = 0;
//     arr = getDivisors(nums[nums.length-1]);
//     for(let i=0; i<arr.length; i++){
//         let div = arr[i];
//         let isA = true;
//         for(let j=0; j<nums.length-1; j++){
//             if(nums[j]%div!==0) isA = false;
//         }
//         if(isA) a = Math.max(a, div);
//     }
//     return a;
// }

// function getDivisors(num) {
//     let arr = [];

//     for (let i = 1; i*i <= num; i++) {
//         if (num % i === 0) arr.push(i);
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr.push(num / arr[i]);
//     }
//     return arr;
// }

// function getA(divA, numsB) {
//     let result = 0;
//     if(!numsB.some(n=>n%divA===0))
//         result = Math.max(result, divA);
//     return result;
// }

// console.log(solution([18, 30, 102, 600, 112, 180, 200, 204, 200, 188, 88], [14, 35, 119, 118, 19, 21, 11, 27]));
// console.log(solution([14, 35, 119],	[18, 30, 102]));

// 멀쩡한 사각형
// function solution(w, h) {
//     var answer = w * h;
//     var broken = 0;
//     var y = 0;

//     for (let x = 1; x <= w; x++) {
//         let newY = x * h / w;
//         broken += Math.ceil(newY) - Math.floor(y);
//         y = newY;
//     }

//     answer -= broken;

//     return answer;
// }

// console.log(solution(3, 3));

// 하노이 탑
// function solution(n) {
//     var answer = [];
//     let stack = [[],[],[]];
//     for(let i=n; i>0; i--){
//         stack[0].push(i);
//     }

//     D(n, 0, 2);

//     return answer;

//     function D(n, src, dst){
//         if(n===1) {
//             stack[dst].push(stack[src].pop());
//             answer.push([src+1,dst+1]);
//         }else{
//             let otherDst = 0;
//             while(otherDst===src || otherDst===dst) otherDst++;
//             D(n-1, src, otherDst);
//             stack[dst].push(stack[src].pop());
//             answer.push([src+1,dst+1]);
//             D(n-1, otherDst, dst);
//         }
//         return;
//     }
// }

// console.log(solution(4));

// 미로 탈출
// 'S' : start
// 'L' : lever
// 'E' : exit
// function solution(maps) {
//     let start = [];
//     let lever = [];
//     let exit = [];

//     for(let i=0; i<maps.length; i++){
//         let startIndex = maps[i].indexOf('S');
//         let leverIndex = maps[i].indexOf('L');
//         let exitIndex = maps[i].indexOf('E');
//         if(startIndex>=0) start = [i, startIndex];
//         if(leverIndex>=0) lever = [i, leverIndex];
//         if(exitIndex>=0) exit = [i, exitIndex];
//     }

//     let distanceToLever= bfs(maps, start, lever);
//     let distanceToExit = bfs(maps, lever, exit);

//     if(distanceToLever === -1 || distanceToExit === -1)
//         return -1;

//     return distanceToLever + distanceToExit;
// }

// function bfs(maps, src, dst){
//     let visited = Array.from(Array(maps.length), () => new Array(maps.length).fill(0));
//     let queue = [[src[0], src[1], 0]];
//     let directions = [[-1,0], [1,0], [0,-1], [0,1]];

//     while(queue.length>0){
//         let [r, c, dist] = queue.pop();
//         if(r === dst[0] && c === dst[1]){
//             return dist;
//         }

//         for(let [dirR, dirC] of directions){
//             newR = r + dirR;
//             newC = c + dirC;
//             if(0<=newR && newR<maps.length && 0<=newC && newC<maps.length && maps[newR][newC]!=='X' && visited[newR][newC]===0){
//                 visited[newR][newC] = 1;
//                 queue.push([newR, newC, dist+1]);
//             }
//         }
//     }

//     return -1;
// };

// console.log(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]));

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("return value");
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log("calling");
//     const result = await new Promise((res) => {
//         setTimeout(() => res("ㅎㅇ"), 2000);
//     });
//     console.log(result);
// }

// asyncCall();

// 요격 시스템
// 모든 폭격을 커버하기위한 최소 요격수
function solution(targets) {
  answer = 0;

  targets.sort((a, b) => a[0] - b[0]);

  let coverLimit = 0;

  for(let target of targets){
      if(target[0]>=coverLimit){
          answer++;
          coverLimit = target[1];
      }else {
          if(target[1]<coverLimit) coverLimit = target[1];
      }
  }

  return answer;
}

let targets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];
console.log(solution(targets));

//