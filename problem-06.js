// Problem 6: Count Vowels in a string
// Vowels ->  a e i o u

// let str = "Programming Hero";
// let vowels = "aeiou";
// Without Function
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];
//   console.log("i ->", i, letter);
//   if (vowels.includes(letter)) {
//     console.log("Vowel");
//     count++;
//   }
// }
// console.log("Count ->", count);

// With Function
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log("i ->", i, letter);
    if (vowels.includes(letter)) {
      console.log("Vowel");
      count++;
    }
  }
  return count;
}
console.log(countVowels("Saikat "));
