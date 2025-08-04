const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" }
];

const formattedEmails = users.map(user => `<${user.email}>`);
console.log(formattedEmails);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const squaredEvens = evenNumbers.map(num => num * num);

console.log(squaredEvens);


const items = [
  { name: "Pen", price: 1.5, quantity: 4 },
  { name: "Notebook", price: 3, quantity: 2 },
  { name: "Eraser", price: 0.5, quantity: 10 }
];

const totalValue = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log(totalValue);



const words = ["world", "the", "to", "Welcome"];

const sentence = words.reduceRight((acc, word) => acc + " " + word) + ".";
console.log(sentence);



const studentData = [
  {
    id: 1,
    name: "Anna",
    grades: {
      Math: [95, 92],
      Science: [90, 85],
      History: [88, 93]
    },
    attendance: [true, true, false, true, true],
    extracurricular: ["Debate Team", "Chess Club"]
  },
  {
    id: 2,
    name: "Ben",
    grades: {
      Math: [60, 65],
      Science: [55, 62],
      History: [68, 70]
    },
    attendance: [true, false, false, true],
    extracurricular: []
  },
  {
    id: 3,
    name: "Cathy",
    grades: {
      Math: [100, 98],
      Science: [100, 100],
      History: [95, 90]
    },
    attendance: [true, true, true, true],
    extracurricular: ["Basketball", "Debate Team"]
  }
];




studentData.forEach(student => {
  console.log(`Hello, ${student.name}!`);
});



const studentNames = studentData.map(student => student.name);
console.log(studentNames);



const studentAverages = studentData.map(student => {
  const allScores = Object.values(student.grades).flat();
  const average = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
  return { name: student.name, average: Math.round(average * 100) / 100 };
});
console.log(studentAverages);




const highPerformingStudents = studentAverages
  .filter(stud => stud.average >= 85)
  .map(stud => studentData.find(s => s.name === stud.name));
console.log(highPerformingStudents);




const strugglingStudents = studentData.filter(student => {
  return Object.values(student.grades).some(subjectScores =>
    subjectScores.every(score => score < 70)
  );
});
console.log(strugglingStudents);



const totalExtracurriculars = studentData.reduce(
  (total, student) => total + student.extracurricular.length,
  0
);
console.log(totalExtracurriculars);




const subjectTotals = {};

studentData.forEach(student => {
  for (let subject in student.grades) {
    if (!subjectTotals[subject]) {
      subjectTotals[subject] = [];
    }
    subjectTotals[subject].push(...student.grades[subject]);
  }
});

let bestSubject = "";
let highestAvg = 0;

for (let subject in subjectTotals) {
  const scores = subjectTotals[subject];
  const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;
  if (avg > highestAvg) {
    highestAvg = avg;
    bestSubject = subject;
  }
}

console.log(bestSubject); 



const reversedDebaters = studentData.reduceRight((names, student) => {
  if (student.extracurricular.includes("Debate Team")) {
    names.push(student.name);
  }
  return names;
}, []).join(" and ");

console.log(reversedDebaters);



const allHaveGoodAttendance = studentData.every(student => {
  const attended = student.attendance.filter(Boolean).length;
  return attended / student.attendance.length >= 0.5;
});
console.log(allHaveGoodAttendance);





const hasInactiveStudent = studentData.some(student => student.extracurricular.length === 0);
console.log(hasInactiveStudent);



studentData.forEach(student => {
  for (let subject in student.grades) {
    student.grades[subject].forEach(score => {
      if (score === 100) {
        console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`);
      }
    });
  }
});












