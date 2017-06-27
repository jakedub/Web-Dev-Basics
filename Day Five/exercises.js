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

function yell (a) {
  return a;
}
var string = "This is my quiet voice";
console.log(string.toUpperCase().repeat(10));

// Exercise 3


function longest  (a, b) {
  if (a < b) {
    largest = a;
  } else {
    largest = b;
  }
    return largest;
}
console.log(longest("this is short", "this is much longer"));

// Exercise 4

var vowel = ["a", "e", "i", "o", "u"]
function isVowel (x) {
  if (x === vowel || x === isLowerCase()){
    value  = true;
  }
  else if {
    value = false;
  }
  return value;
}

console.log(isVowel("d"));
