
let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));
let op = prompt("Enter operation (+, -, *, /, %):");
let calcResult;

if (op === '+') calcResult = n1 + n2;
else if (op === '-') calcResult = n1 - n2;
else if (op === '*') calcResult = n1 * n2;
else if (op === '/') calcResult = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
else if (op === '%') calcResult = n1 % n2;
else calcResult = "Invalid operator";


console.log(`${n1} ${op} ${n2} = ${calcResult}`);

