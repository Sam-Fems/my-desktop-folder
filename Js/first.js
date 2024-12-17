console.log("Hello World!");
console.log(typeof "Samuel");
console.log(typeof 42);
console.log(typeof true);

//Strings
const myVariable = "Mathematics";

//String Methods
console.log(myVariable.charAt(0));
console.log(myVariable.indexOf("mat"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5, 8));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase())
console.log(myVariable.includes("div"));
console.log(myVariable.split("m"));
console.log(myVariable.split(""));
console.log("Sam,Emma,Mich".split(" "));

//Lenght Property
console.log(myVariable.length);

//Numbers

// An integer is a whole number.
const myNumber = 42;
const myFloat = 42.0151;
const myString = "42.123abc";

console.log(myNumber === myFloat);

console.log(myString + 3);
console.log(Number(myString) + 3);

//Number Methods
//The Number .isInteger() metho determines whether the passed value is an integer
console.log(Number.isInteger(myString));

//The Number .parseFloat()  method parses an arguement and returns a floating point number. If a number cannot be parsed from the arguement, it returns NaN.
console.log(Number.parseFloat(myFloat));

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(2));

//The Number .parseInt() method parses a string arguement and returns an integer
console.log(Number.parseInt(myFloat));

//The toString() method returns a string representing the number.
console.log(myFloat.toString());

//Chaining = Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x
function myFunction(a, b) {
    return 4 * 3;
}
