
let subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer'];
let total = 0;

for (let i = 0; i < subjects.length; i++) {
    let mark = parseInt(prompt(`Enter marks for ${subjects[i]} out of 20:`));
    total += mark;
}

let percentage = (total / 100) * 100;
let grade = '';

if (percentage >= 90) grade = 'Grade A';
else if (percentage >= 80) grade = 'Grade B';
else if (percentage >= 70) grade = 'Grade C';
else if (percentage >= 60) grade = 'Grade D';
else if (percentage >= 40) grade = 'Grade E';
else grade = 'Grade F';

console.log(`Total Marks: ${total}/100`);
console.log(`Percentage: ${percentage}%`);
console.log(`Grade: ${grade}`);



