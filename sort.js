// 선택 정렬

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[minIndex]) minIndex = j;
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

// 버블 정렬

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        console.log(arr);
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(left, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//const testData = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 100));
let testData = [7, 2, 4, 3, 8, 1];
let start, end;

// start = Date.now();
// selectionSort(Array.from(testData));
// end = Date.now();
// console.log(`selectionSort: ${((end - start) / 1000).toFixed(3)}초`);

// start = Date.now();
// console.log(quickSort(testData, 0, testData.length-1));
// end = Date.now();
// console.log(testData);
// console.log(`bubbleSort: ${((end - start) / 1000).toFixed(3)}초`);

// let strOfArr = "";
// arr.forEach((num, index) => {
//     if (index === i) strOfArr += "\x1b[32m" + num + "\x1b[0m, ";
//     else if (index === minIndex) strOfArr += "\x1b[33m" + num + "\x1b[0m, ";
//     else strOfArr += num + ", ";
// });
// console.log(`${seq++}번째 정렬 : ${strOfArr}`);

// function quickSort(array, left = 0, right = array.length - 1) {
//     if (left >= right) return;

//     //console.log('분할/정렬전:', left, right);

//     const mid = Math.floor((left + right) / 2);
//     const pivot = array[mid];

//     let i = left;
//     let j = right;

//     while (i <= j) {
//         while (array[i] < pivot) i++;
//         while (array[j] > pivot) j--;
//         if(i<=j){
//             [array[i], array[j]] = [array[j], array[i]];
//             console.log("중간정렬", i, j, array);
//             i++;
//             j--;
//         }
//     }
//     if(left < j){
//         quickSort(array, left, j);
//     }
//     if(right > i){
//         quickSort(array, i, right);
//     }
//     return array;
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];

        // 현재 요소를 정렬된 부분과 비교하며 적절한 위치에 삽입
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}




function quickSort(arr, left, right) {
    console.log(arr);
    let index = partition(arr, left, right);
    if (left < index - 1) quickSort(arr, left, index - 1);
    if (index < right) quickSort(arr, index, right);
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}


// 힙 정렬
function heapSort(heap) {
    console.log(heap);
    const n = heap.length;
    // 힙 구성
    for(let i=1; i<n; i++){
        let cur = i;
        while(cur!==0) {
            // 현재 원소의 부모 원소와 비교, 현재 원소가 크다면 부모와 교환하고 부모부터 다시 순회
            let root = Math.floor((cur -1)/2);
            if(heap[root]<heap[cur]) [heap[root], heap[cur]] = [heap[cur], heap[root]];
            cur = root;
        } ;
    }
    console.log(heap);
    // 크기를 줄여가며 반복적으로 힙 구성, 한번 반복할때마다 마지막에 최대값 정렬
    for (let i = n-1; i>=0; i--){
        [heap[0], heap[i]] = [heap[i], heap[0]];
        let root = 0;
        let cur = 1;
        while(cur<i) {
            cur = 2*root +1;
            // 자식 중에 더 큰 값 찾기
            if(cur<i-1 && heap[cur] < heap[cur+1]) cur++;
            // 루트보다 자식이 크다면 교환
            if(cur < i && heap[root] < heap[cur]) [heap[root], heap[cur]] = [heap[cur], heap[root]];
            root = cur;
        };
        console.log(heap);
    }
}

let arr = [7, 6, 5, 8, 3, 9];
//console.log(insertionSort(arr));
heapSort(arr);

