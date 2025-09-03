let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); 
console.log(b); 


const numbers = [1, [2, 3], 4];

const [first, [second, third], fourth] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
console.log(fourth); // 4



const user = {
  name: "Saba",
  age: 13,
  country: "Georgia"
};

const { name, age, country } = user;

console.log(name);    // "Saba"
console.log(age);     // 13
console.log(country); // "Georgia"


const student = {
  id: 1,
  info: {
    firstName: "Saba",
    lastName: "Sokhashvili",
    grades: {
      math: 95,
      english: 88
    }
  }
};

const { info: { firstName, lastName, grades: { math, english } } } = student;

console.log(firstName); // "Saba"
console.log(lastName);  // "Sokhashvili"
console.log(math);      // 95
console.log(english);   // 88



const car = {
  brand: "BMW",
  model: "M5",
  year: 2023
};

// property-ს სახელები ვცვლით ახალი ცვლადებით
const { brand: carBrand, model: carModel, year: manufactureYear } = car;

console.log(carBrand);       // "BMW"
console.log(carModel);       // "M5"
console.log(manufactureYear); // 2023





