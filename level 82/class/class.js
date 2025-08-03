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






const name = "MasterJaneza";
const age = 29;
const skills = ["JavaScript", "React"];
const greet = function() { return "Hello!"; };
const isCool = true;
const details = { country: "Georgia" };

console.log(checkType(name));     // primitive
console.log(checkType(age));      // primitive
console.log(checkType(skills));   // non-primitive
console.log(checkType(greet));    // non-primitive
console.log(checkType(isCool));   // primitive
console.log(checkType(details));  // non-primitive






function isFalsy(value) {
  return !value;
}


console.log(isFalsy(false));      // true
console.log(isFalsy(0));          // true
console.log(isFalsy(""));         // true
console.log(isFalsy(null));       // true
console.log(isFalsy(undefined));  // true
console.log(isFalsy(NaN));        // true

console.log(isFalsy("Hello"));    // false
console.log(isFalsy(42));         // false
console.log(isFalsy([]));         // false
console.log(isFalsy({}));         // false
