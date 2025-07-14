
let number = parseInt(prompt("Enter a number:"));
let root = parseInt(prompt("Enter the root value :"));

let result = 1;
for (let i = 0; i < root; i++) {
    result *= number;
}
result = 1; // 34an arg3ha tany l ay calculation
let temp = number;
while (temp > 1) {
    temp = temp / number;
    result = result * temp;
}


console.log("Approximate " + root + "-th root of " + number + ": " + result);



