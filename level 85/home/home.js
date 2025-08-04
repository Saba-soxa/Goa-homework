// Task 1
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" }
];
const userWithId3 = users.find(user => user.id === 3);
console.log("User with ID 3:", userWithId3);


// Task 2
const colors = ["red", "green", "blue", "yellow"];
colors.reverse(); 
console.log("Reversed colors:", colors);


// Task 3
const prices = [29.99, 10.5, 99.95, 50.0, 5.75];
prices.sort((a, b) => b - a); 
console.log("Sorted prices (descending):", prices);


// Task 4
const someString = "Hello World";
const characters = Array.from(someString);
console.log("Characters array:", characters);


// Task 5
const data1 = [1, 2, 3, 4, 5];
const data2 = "Not an array";
const isData1Array = Array.isArray(data1);
const isData2Array = Array.isArray(data2);
console.log("Is data1 an array?", isData1Array);
console.log("Is data2 an array?", isData2Array);


// Task 6

// Sample data
const courses = [
  {
    id: "CS101",
    name: "Intro to Programming",
    isActive: true,
    capacity: 35,
    credits: 3,
    students: [
      { name: "Alice", grades: [85, 90, 78] },
      { name: "Bob", grades: [65, 70, 72] }
    ]
  },
  {
    id: "MA201",
    name: "Calculus I",
    isActive: false,
    capacity: 25,
    credits: 4,
    students: [
      { name: "Charlie", grades: [95, 80, 88] },
      { name: "Diana", grades: [60, 68, 50] }
    ]
  },
  {
    id: "PH301",
    name: "Physics",
    isActive: true,
    capacity: 40,
    credits: 3,
    students: [
      { name: "Eve", grades: [90, 93, 87] },
      { name: "Frank", grades: [75, 80, 85] }
    ]
  }
];

const studentNamesString = "Alice,Bob,Charlie,Diana,Eve,Frank";
// 1. Array.isArray()
const isCoursesArray = Array.isArray(courses);
const isStudentNamesArray = Array.isArray(studentNamesString);
console.log("Is 'courses' an array?", isCoursesArray);
console.log("Is 'studentNamesString' an array?", isStudentNamesArray);

// 2. Array.from()
const allStudentNames = Array.from(studentNamesString.split(","));
console.log("All student names:", allStudentNames);

// 3. forEach() 
courses.forEach(course => {
  console.log(`Course ID: ${course.id}, Name: ${course.name}`);
});

// 4. map()
const courseNames = courses.map(course => course.name);
console.log("Course names:", courseNames);
const courseAverages = courses.map(course => {
  const allGrades = course.students.flatMap(student => student.grades);
  const total = allGrades.reduce((sum, grade) => sum + grade, 0);
  const average = allGrades.length ? total / allGrades.length : 0;
  return { id: course.id, average: average.toFixed(2) };
});
console.log("Course averages:", courseAverages);

// 6. filter()
const activeCourses = courses.filter(course => course.isActive);
console.log("Active courses:", activeCourses);

// 7. find()
const calculusCourse = courses.find(course => course.id === "MA201");
console.log("Calculus course:", calculusCourse);

// 8. every()
courses.forEach(course => {
  const allStudentsHaveHighGrades = course.students.every(student =>
    student.grades.some(grade => grade >= 70)
  );
  console.log(
    `${course.name}: ${
      allStudentsHaveHighGrades
        ? "All students have at least one grade >= 70"
        : "Not all students have a grade >= 70"
    }`
  );
});
const hasSmallCourse = courses.some(course => course.capacity < 30);
console.log("Is there any course with capacity less than 30?", hasSmallCourse);
const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
console.log("Courses by ascending capacity:", coursesByCapacity);
coursesByCapacity.reverse();
console.log("Courses by descending capacity:", coursesByCapacity);
const totalCredits = activeCourses.reduce((sum, course) => sum + course.credits, 0);
console.log("Total credits (active courses):", totalCredits);
const activeCourseNamesReversed = activeCourses.reduceRight((str, course, index) => {
  return str === "" ? course.name : `${str} - ${course.name}`;
}, "");
console.log("Active course names (reversed):", activeCourseNamesReversed);
