// single comment 
/* multi comment */

// variables - containers that store data
// declaration of variable
//1. var - function scoped, can be redeclared and updated
// syntax - var variableName = value;
var name = "John Doe";

//2. let - block scoped, can be updated but not redeclared
// syntax - let variableName = value;
let age = 30;
age = 50;

//3. const - block scoped, cannot be updated or redeclared
// syntax - const variableName = value;
const pi = 3.14;

// DATA TYPES
// Primitive data types
// 1. String - sequence of characters
// 2. Numbers - integers and floats
// 3. Boolean - true or false
let isStudent = true; // boolean
// 4. Null - empty value
let distance = null; // null
// 5. Undefined - variable that has been declared but not assigned a value
let score; // undefined

// Non primitive data types
// 1. Object - collection of key-value pairs
// syntax - let objectName = { key: value }; (properties)
let shoe = {
    brand: "Nike",
    size: 10,
    color: "red",
};
//console.log(shoe); // Nike
//console.log(shoe.brand); //accessing object property using dot notation
//console.log(shoe["color"]); //accessing object property using bracket notation

// 2. Array - collection of values
// syntax - let arrayName = [value1, value2, value3]; indices -> index
let cars = ["Toyota", "Honda", "BMW"];
//console.log(cars);
//console.log(cars[2]); // accessing array element using index

let house = {
    color: "Blue",
    size: 120,
    price: 500000,
    location: "New York",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    garage: true,
    garden: false,
    pool: true,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};

let countries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Africa", "Nigeria", "Ghana", "Ethiopia", "Egypt"];


//Operators
// 1. Assignment operator (=) - assigns value to a variable
//+= - addition assignment operator - adds a value to a variable
//-= - subtraction assignment operator - subtracts a value from a variable
//*= - multiplication assignment operator - multiplies a value to a variable
// /= - division assignment operator - divides a value to a variable
// %= - modulus assignment operator - divides a value to a variable and returns the remainder
// **= - exponentiation assignment operator - raises a value to the power of a variable
let x = 10;
let additionAssignment = x += 5; // 15
let subtractionAssignment = x -= 5; // 10   
let multiplicationAssignment = x *= 5; // 50
let divisionAssignment = x /= 5; // 2
let modulusAssignment = x %= 5; // 0
let exponentiationAssignment = x **= 5; // 10000000000

//2. Arithmetic operators (+, -, *, /, %, **)
let a = 10; let b = 5;
let addition = a + b; // 15 
let subtraction = a - b; // 5
let multiplication = a * b; // 50
let division = a / b; // 2
let modulus = a % b; // 0
let exponentiation = a ** b; // 100000


//3. Comparison operators (==, ===, !=, !==, >, <, >=, <=) - compares two values and returns a boolean value
let c = 10; let d = '10';
// == - equal to operator - compares two values and returns true if they are equal
// === - strict equal to operator - compares two values and returns true if they are equal and of the same type
// != - not equal to operator - compares two values and returns true if they are not equal
// !== - strict not equal to operator - compares two values and returns true if they are not equal and of the same type
// > - greater than operator - compares two values and returns true if the left value is greater than the right value
// < - less than operator - compares two values and returns true if the left value is less than the right value
// >= - greater than or equal to operator - compares two values and returns true if the left value is greater than or equal to the right value
// <= - less than or equal to operator - compares two values and returns true if the left value is less than or equal to the right value

// type conversion
// implicit conversion - automatic conversion of data types by the compiler
// explicit conversion - manual conversion of data types by the programmer

//console.log(c == d); // true - implicit conversion
//console.log(c === d); // false - explicit conversion

// Logical Operators (&&, ||, !)
// && - logical AND operator - returns true if both operands are true

//console.log(c > d && c == d);
// || - logical OR operator - returns true if at least one operand is true
//console.log(c > d || c == d); 
// ! - logical NOT operator - returns true if the operand is false and vice versa
//console.log(!(c > d)); 

// Functions reusable block of code that performs a task
// syntax - function functionName(parameter1, parameter2,....) {  //code to be executed //return value; (optional) }
// function declaration
function greet(name) {
    return "Hello " + name;
}

// console.log(greet("Instructor Eddy"));

function funExponent(a,b){
    return a**b
}

//console.log(funExponent(2,3)); // 8

function introduce(name, location, profession) {
    const message = `My name is ${name}, I am from ${location}, and I am a ${profession}.`;
    return message;
}
  
console.log(introduce("John", "New York", "Software Engineer"));  



