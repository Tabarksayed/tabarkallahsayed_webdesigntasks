
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let num3 = parseInt(prompt("Enter third number:"));

let max = num1;
if (num2 > max) max = num2;
if (num3 > max) max = num3;

let min = num1;
if (num2 < min) min = num2;
if (num3 < min) min = num3;


console.log(`Numbers: ${num1}, ${num2}, ${num3}`);
console.log(`Max: ${max}, Min: ${min}`);


