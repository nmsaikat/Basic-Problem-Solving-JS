// Problem 9: Find the Largest Number in an Array

let arr = [500, 120, 20, 5010, 1220];
let largest = [0];

for (let i = 1; i < arr.length; i++) {
  let correntElement = arr[i];
  if (customElement > largest) {
    largest = customElement;
  }
  console.log(correntElement);
}
console.log(largest);
