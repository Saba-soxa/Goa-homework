const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 67 },
  { name: "Diana", grade: 78 },
  { name: "Evan", grade: 91 }
];

const allPassing = students.every(student => student.grade >= 70);
const hasFailing = students.some(student => student.grade < 65);
students.forEach(student => {
  console.log(`Student: ${student.name}`);
});

const honorRoll = [];
students.forEach(student => {
  if (student.grade >= 90) {
    honorRoll.push(student.name);
  }
});
console.log("All Passing:", allPassing);
console.log("Has Failing:", hasFailing);
console.log("Honor Roll:", honorRoll);
