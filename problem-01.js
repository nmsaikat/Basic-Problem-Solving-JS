// Problem 1: Check if a Number is Even or Odd

// Without function
// let number = 20;
// if (number % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// With Function
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

console.log(checkEvenOrOdd(21));
