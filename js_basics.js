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


//String operations
//    1.0 Joining two or more strings
//        1.1.0 concat method
var firstName = 'Harrison';
var secondName = ' Kamau';
var fullName = firstName.concat(secondName);
console.log(fullName);
// → 'Harrison Kamau'
//        1.1.1 using '+' operator
    var greet = 'Hello';
    var name = ' Harrison';
    var sayHello = greet + name;
    console.log(sayHello);
    // →  Hello Harrison
//    1.1 Slicing /Splitting strings
var surname = fullName.replace('Harrison', "");
console.log(surname);
// → 'Kamau'


//Array Object
//The Array object is used to store multiple values in a single variable:
var cars = ["Saab", "Volvo", "BMW"];
//using new keyword
var cars = new Array("Saab", "Volvo", "BMW");
//Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on
//Array properties
//1. constructor
//The constructor property returns an array's constructor function:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.constructor
//The constructor property returns:
function Array() { [native code] }
//2. length
//Return the length of an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;
//The result returns
4
//3. Prototype
//Make a new array method that transforms array values into upper case:
Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};
//Make an array, then call the myUcase method:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
//The values in the fruits array is now:
BANANA,ORANGE,APPLE,MANGO

//Array methods
1.concat() method
//Joins two or more arrays
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
//results to :
['Cecilie','Lone','Emil','Tobias','Linus'];
2. find() method
// The find() method returns the value of the first element in an array that pass a test (provided as a function)
 var ages = [3, 10, 18, 20];
function checkAdult(age) {
    return age >= 18;
};
age.find(checkAdult); //returns 18
3. forEach() method
//getting the sum of the elements in an array
var numbers = [10,20,30,40,50];
var sum = 0;
numbers.forEach(function(number){
    sum += number;
});
console.log(sum) >> 150

3. indexOf() method
//The indexOf() method searches the array for the specified item, and returns its position.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
//the result will be
2

4. map() method
//Creates a new array with the result of calling a function for each array element
//Map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
//example 1
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]

//example 2
var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
function getFullName(item,index) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
};
console.log(persons.map(getFullName)); //returns ['Malcom Reynolds','Kaylee Frye','Jayne Cobb']

5. push() method
//The push() method adds new items to the end of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // returns ['Banana','Orange','Apple','Mango','Kiwi']

6. reduce() method
//The reduce() method reduces the array to a single value.
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
};
numbers.reduce(getSum); //returns 125

7. reverse() method
//The reverse() method reverses the order of the elements in an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();  // returns ['Mango','Apple','Orange','Banana']

8. shift() method
The shift() method removes the first item of an array, and returns that item.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); //returns ["Orange", "Apple", "Mango"]

9. unshift() method
//The unshift() method adds new items to the beginning of an array, and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple"); // returns  ['Lemon','Pineapple','Banana','Orange','Apple','Mango']

10. slice() method
//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
//the result of citrus will be:
['Orange','Lemon']

11. sort() method
//The sort() method sorts the items of an array.
//By default, the sort() method sorts the values as strings in alphabetical and ascending order.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // returns ['Apple','Banana','Mango','Orange']


12. some() method
//The some() method checks if any of the elements in an array pass a test (provided as a function).
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
};
ages.some(checkAdult) //returns true
