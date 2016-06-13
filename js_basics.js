//1. Variables
//variables are declared using var keyword
var string = "Hello World!"; //the value of the variable string is Hello World!
var greeting = 'hey';
//You can retrieve the value by just calling the variable by name
//console.log(string);


//2. Comments
//You can put comments into JavaScript code, just like you can in CSS:
/*
Everything in between is a comment.
*/

//If your comment contains no line breaks, it's often easier to put it behind two slashes like this:
// This is a comment


//3. Operators
var total = 6 + 9;
var subtract = 29 - 10;
var say = "hello" + "world";


//4. Conditionals
//if and else statement
var iceCream = "chocolate";
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
};

//5. Functions
var squareRoot = function(number){
    return number ** 0.5;
}
squareRoot(number); //calling the function

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
//using the function
multiply(4,7);
multiply(20,20);
multiply(0.5,3);


//6. Dynamic typing
//JavaScript is a loosely typed or a dynamic language. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:
var foo = 42;    // foo is now a Number
var foo = "bar"; // foo is now a String
var foo = true;  // foo is now a Boolean


//7. Data types
    -Boolean( true and false)
//      boolean values
        console . log (3 > 2)
        // → true
    -Null (The Null type has exactly one value: null.)
    -Undefined(A variable that has not been assigned a value has the value undefined)
    -Number
    -String
    
//8. Unary operators
//    example unary operator
    console.log ( typeof 4.5);
    // → number

//9. Logical operators
//JavaScript supports three logical operators:
    - and(&&)
    - or(||)
    - not(!)
    
//    The && operator represents logical and. It is a binary operator, and its
//      result is true only if both the values given to it are true.
          console . log ( true && false )
            // → false
          console . log ( true && true )
            // → true
          
//    The || operator denotes logical or. It produces true if either of the values
//given to it is true.
          console . log ( false || true )
          // → true
          console . log ( false || false )
          // → false
          
          
//10. Ternary
console . log ( true ? 1 : 2) ;
    // → 1
console . log ( false ? 1 : 2) ;
// → 2

//11. Automatic type conversion
console . log (8 * null )
// → 0
console . log ("5" - 1)
// → 4
console . log ("5" + 1)
// → 51
console . log (" five " * 2)
// → NaN
console . log ( false == 0)
// → true
