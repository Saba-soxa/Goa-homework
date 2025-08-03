const person = {
  სახელი: "საბა",
  ასაკი: 13,
  ქალაქი: "თბილისი"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}


const products = {
  ვაშლი: 2.5,
  ბანანი: 3,
  ფორთოხალი: 4.2
};

let sum = 0;
for (let key in products) {
  sum += products[key];
}
console.log("ჯამი: " + sum);




const mixedData = {
  სახელი: "ანა",
  ასაკი: 30,
  აქტიურია: true,
  ქულა: 85,
  წაშლილია: false,
  ქალაქი: "ბათუმი"
};

for (let key in mixedData) {
  if (typeof mixedData[key] === "number") {
    console.log(key + ": " + mixedData[key]);
  }
}




const books = {
  "მარტო სახლში": "ჯონ სმიტი",
  "ჰარი პოტერი": "ჯოან როულინგი",
  "1984": "ჯორჯ ორუელი"
};

const titles = [];
for (let key in books) {
  titles.push(key);
}
console.log(titles);



const numbers = [5, 10, 15, 20];
let total = 0;

for (let num of numbers) {
  total += num;
}
console.log("ჯამი:", total);



const text = "გამარჯობა";

for (let char of text) {
  console.log(char);
}




const strings = ["მზე", "ლამპარი", "სკამი", "სამაგიდო", "თვე"];

for (let str of strings) {
  if (str.length > 5) {
    console.log(str);
  }
}




const nums = [2, 4, 6, 8];
const squares = [];

for (let n of nums) {
  squares.push(n * n);
}
console.log(squares);

