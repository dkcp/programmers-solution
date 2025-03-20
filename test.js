function isOutside(i, j){
  let routes = [];
  let di = 0, dj = 0;

  let k = 0;
  do {
    if(i===0 || i===array.length || j===0 || j===array[0].length) return true;

    di = 0; dj = 0;
    if(i+1<array.length && !routes.includes((i+1) * array[0].length + j) && array[i+1][j]===' '){
      routes.push((i+1) * array[0].length + j);
      di = 1;
    }else if(i>0 && !routes.includes((i-1) * array[0].length + j) && array[i-1][j]===' '){
      routes.push((i-1) * array[0].length + j);
      di = -1;
    }else if(j+1<array[0].length && !routes.includes(i * array[0].length + j + 1) && array[i][j+1]===' '){
      routes.push(i * array[0].length + j + 1);
      dj = 1;
    }else if(j>0 && !routes.includes(i * array[0].length + j - 1) && array[i][j-1]===' '){
      routes.push(i * array[0].length + j - 1);
      dj = -1;
    }

    k++; if(k>20) return;
    i += di;
    j += dj;
  } while (di !== 0 || dj !== 0);

  return false;
}

const array2 = [
  [' ', 'Z', 'W', 'Q', 'Y'],
  ['C', 'A1', 'A2', ' ', 'X'],
  [' ', ' ', 'D', 'D', ' '],
  [' ', 'C', ' ', 'C', ' '],
];

let array3 = ["AAAAAA", "A    A", "ACA  A", "AAAA A", "A    A", "  AAAA"];
let array = Array.from(array3, arr => Array.from(arr));

//console.log(array);
console.log(isOutside(1, 0));