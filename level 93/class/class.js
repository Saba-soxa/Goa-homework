// N1
class Book {
  constructor(title, author) {
    this.title = title;        
    this.author = author;       
    this.isAvailable = true;    
  }

  borrow() {
    if (this.isAvailable) {                
      this.isAvailable = false;            
      return `You borrowed ${this.title}`; 
    } else {
      return `Sorry, ${this.title} is not available.`; 
    }
  }
}


// N2

let myMap = new Map([
  ["name", "Saba"],
  [1, "One"],
  [true, "Yes"],
  ["age", 13],
  ["isStudent", false]
]);

console.log("Map-ის ზომა:", myMap.size);

for (let [key, value] of myMap.entries()) {
  console.log("Key:", key, "| Value:", value);
}

console.log("არის თუ არა 'name' Key:", myMap.has("name"));
console.log("არის თუ არა 'country' Key:", myMap.has("country"));


// N3
let arr = ["apple", "banana", "orange", "apple", "banana", "orange", "apple", "banana"];

let uniqueArr = new Set(arr);

console.log("ყველა ელემენტი:", arr);
console.log("უნიკალური ელემენტები:", uniqueArr);
