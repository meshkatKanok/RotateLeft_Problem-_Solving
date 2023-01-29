function RotateLeft(arr, num){
  for (let i = 0; i < num; i++){
    let element= arr[0];
    for (let j = 0; j < arr.length - 1; j++){
      arr[j] = arr[j+1];
    }
    arr[arr.length - 1] = element;
  }
  return arr;
}

const checkRotate=RotateLeft([1, 2, 3, 4, 5], 4 )
console.log(checkRotate)