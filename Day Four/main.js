/*=========================================================
    Part 1: Variables
*/
var givenName;
console.log(givenName);
// Q: What value is stored in `givenName` right now?
// A:Undefined


givenName = "Brett";
console.log(givenName);
// Q: What is `givenName` set to now?
// A:Brett


givenName = givenName;
console.log(givenName);
// Q: What is `givenName` set to now?
// A: Brett

// var greeting = "Hello, how are you ";
// console.log(greeting + givenName+"?")

/*=========================================================
     Part 2: Simple Math
// */
// var high = 50;
// var low  = 10;
//
//
// var math = high - low;
// // Q: What is `math` set to?
// // A: 40
//
// math = high - "5";
// // Q: What is `math` set to?
// // A:
//
//
// // Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
// // Write Code Below:
//
// math = high * "5";
// console.log(math);
//
// math = low / "2";
// console.log(math);
//
// math = low - 2;
// console.log(math);
//
// high = 44
// math = high * low;
// console.log(math);

/* =========================================================
     Part 3: Expressions
*/


// // Create a variable to calculate your age
// // The answer should read "NAME is XX years old"
// // The answer should not be written in a comment.
// var born = 1983;
// var today = 2017;
//
// // Answers Below:
// var name = "Jacob"
// var age = today - born;
// var first = name + " is " + age + " years old";
// console.log(first);

// // Store some information following in variables.
// var yourName = "Jake";
// var instructorName = "Aubrey";
//
// // Update the variables above so the expression reads correctly.
// // Answers Below:
//
//
// // Final Statement
// var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
// console.log(statement);

var myAge = 45;
var isOld;
if (myAge > 100) {
  isOld = true;
}
else {
  isOld = false;
}
console.log(isOld);
