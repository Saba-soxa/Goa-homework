
let allValue = [
  25, 
  "Hello", 
  3.14, 
  true, 
  {
    firstName: "Saba",
    lastName: "sokhashvili",
    age: 13,
    country: "Georgia",
    city: "Tbilisi"
  }
];

let sentence = "My name is " + allValue[4].firstName + 
  ", my last name is " + allValue[4].lastName + 
  ", I am " + allValue[4].age + " years old" +
  ", I live in " + allValue[4].country + 
  ", in the city of " + allValue[4].city + ".";

console.log(sentence);
