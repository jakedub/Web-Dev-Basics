// repeat
// toUpperCase
// Exercise 1

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2,2);
console.log(twoPlusTwo);

// Exercise 2

function yell (a) {
  return a;
}
var string = "This is my quiet voice";
console.log(string.toUpperCase());

// //Could do instead do:
// function.yell(string) {
//   return string.toUpperCase());
//   console.log(yell"here is a string");
// }
function yell10 (a) {
  return a;
}
var string = "This is my quiet voice";
console.log(string.toUpperCase().repeat(10));

//Could do this instead
function yell10(string) {
  return yell(string).repeat(10);
}
console.log(yell10("string"));

// Exercise 3


function longest  (a, b) {
  if (a.length > b.length) {
    return a;
  }
  else if
    (b.length > a.length) {
    return b;
  }
  else {
    return "the two strings are the same length"
  }
    return largest;
}
console.log(longest("this is short", "this is much longer"));

// Exercise 4

// var vowel = ["a", "e", "i", "o", "u"]
// function isVowel (x) {
//   if (x === vowel || x === isLowerCase()){
//     value  = true;
//   }
//   else if {
//     value = false;
//   }
//   return value;
// }
// 
// console.log(isVowel("d"));

// actual answer

function checkVowel (letter) {
  var letter = letter.toUpperCase();
  if (letter === "A" || letter === "E" || letter === "I" || letter === "O" === letter === "U)") {
    return true;
  }
  else {
    return false;
  }
};
console.log(checkVowel("d"));
