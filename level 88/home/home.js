const person1 = { name: "Alice", age: 30, city: "New York" };


const { name, age } = person1;

console.log(name); 
console.log(age);  


const person = { name: "Alice", age: 30, city: "New York" };


const { name: userName, city: userCity } = person;

console.log(userName); 
console.log(userCity); 



const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

const { grades: { math, english } } = student;

console.log(math);
console.log(english);

const numbers = [1, 2, 3, 4, 5];

const [first, , third] = numbers;

console.log(first);
console.log(third);

