// Problem 5: Reverse a String

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// Without Function
let str = "programming";
// let reverseWord = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   console.log("=>", i, letter);
//   reverseWord = reverseWord + letter;
// }
// console.log(reverseWord);

// With Function
function reverseWord(word) {
  let reverseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    console.log("=>", i, letter);
    reverseWord = reverseWord + letter;
  }
  return reverseWord;
}
console.log(reverseWord("Saikat"));
