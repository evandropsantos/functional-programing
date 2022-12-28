// function ordenar(array) {
//   return array.sort();
// }

// Pura
function ordenar(array) {
  return [...array].sort((a, b) => a - b);
}

// const nums = [3, 1, 7, 9, 4, 6];
const nums = Object.freeze([3, 1, 7, 9, 4, 6]);

const numerosOrdenados = ordenar(nums);
console.log(nums, numerosOrdenados);

const parteNums = nums.slice(1);
console.log(parteNums, nums);