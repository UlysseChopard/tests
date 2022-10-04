const findMissingNum = (arr) => {
  const arrSum = arr.reduce((acc, val) => (acc += val));
  const completeSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  return completeSum - arrSum;
};

console.log(findMissingNum([1, 3, 5, 4]));
// [1, 3, 5, 4] => 2

console.log(findMissingNum([6, 3, 4, 5, 2]));
// [6, 3, 4, 5, 2] => 1

console.log(findMissingNum([5, 3, 2, 1, 4]));
// [5, 3, 2, 1, 4] => 6
