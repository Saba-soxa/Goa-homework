function checkType(value) {
  const type = typeof value;
  if (
    value === null ||
    type === "string" ||
    type === "number" ||
    type === "boolean" ||
    type === "undefined" ||
    type === "symbol" ||
    type === "bigint"
  ) {
    return "primitive";
  } else {
    return "non-primitive";
  }
}






function allFalsy(arr) {
  for (let item of arr) {
    if (item) return false;
  }
  return true;
}







function removeFalsy(arr) {
  const result = [];
  for (let item of arr) {
    if (item) result.push(item);
  }
  return result;
}





function countTruthiesAndFalsies(arr) {
  let result = { truthy: 0, falsy: 0 };
  for (let item of arr) {
    if (item) result.truthy++;
    else result.falsy++;
  }
  return result;
}





let a = "hello";
let b = a;
b = "world";

console.log(a); // "hello"
console.log(b); // "world"



let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name); 
console.log(y.name); 



const arr = ["JS", "React", "Node"];

console.log("Using for...in:");
for (let key in arr) {
  console.log(key); 
}

console.log("Using for...of:");
for (let value of arr) {
  console.log(value); 
}




const person = {
  name: "Luka",
  age: 12,
  city: "Kutaisi"
};

console.log("Object keys:");
for (let key in person) {
  console.log(key);
}

const fruits = ["apple", "banana", "orange"];

console.log("Array values:");
for (let fruit of fruits) {
  console.log(fruit);
}
