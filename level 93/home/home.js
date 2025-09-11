let myMap = new Map([
  ["name", "Saba"],       // string → string
  [1, "One"],             // number → string
  [true, "Yes"],          // boolean → string
  ["age", 12],            // string → number
  ["isStudent", false]    // string → boolean
]);



console.log("Map-ის ზომა არის:", myMap.size);



for (let [key, value] of myMap.entries()) {
  console.log("Key:", key, "| Value:", value);
}




console.log("გაქვს თუ არა key 'name'? →", myMap.has("name"));
console.log("გაქვს თუ არა key 'country'? →", myMap.has("country"));



let numbers = [5, 5, 5, 10, 10, 15, 15, 15];
let uniqueNumbers = new Set(numbers);

console.log("უნიკალური მნიშვნელობები:", uniqueNumbers);




