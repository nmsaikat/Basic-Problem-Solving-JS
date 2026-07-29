// Problem 02: Sum of a Range of Numbers (1 to N)
// 7 = 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

// Without Function
// let number = 7;
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
//   console.log(i);
// }
// console.log("sum =>", sum);

// With Function
function sumRange(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    // console.log(i);
  }
  return sum;
}

console.log(sumRange(7));
console.log(sumRange(4));
