// Problem 3: Factorial of a Number

// Without Function
// let number = 5;
// let result = 1;
// for (let i = 1; i <= number; i++) {
//   console.log("i =>", i);
//   result = result * i;
// }
// console.log("Total =>", result);

// With Function
function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    console.log("i =>", i);
    result = result * i;
  }
  return result;
}
console.log("Total =>", getFactorial(6));
