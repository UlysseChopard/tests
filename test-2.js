const findSumOfSubArrays = (arr, num) => {
  const subArrays = [];
  let i;
  for (i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum === num) subArrays.push([sum]);
    let j;
    for (j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === num) {
        const subArr = [];
        let k;
        for (k = i; k <= j; k++) {
          subArr.push(arr[k]);
        }
        subArrays.push(subArr);
      }
    }
  }
  return subArrays.length;
};

console.log(findSumOfSubArrays([1, 1, 1], 2));
// // [1,1,1] et k=2 => output = 2

console.log(findSumOfSubArrays([1, 2, 3, 0, 3], 3));
// // [1,2,3,0,3] et k=3 => output = 5

console.log(findSumOfSubArrays([4, 2, 9, 7, 19], 5));
// [4, 2, 9, 7, 19] et k=5 => output = 0

console.log(findSumOfSubArrays([2, -1, 1], 2));
// [2, -1, 1] et k=2 ⇒ output = 2
