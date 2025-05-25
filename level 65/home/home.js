// N1

// 1. წიგნის ობიექტის შექმნა
let book = {
  title: "ვეფხისტყაოსანი",
  author: "შოთა რუსთაველი",
  year: 1200,
  genre: "ეპოსი",
  price: 50
};


console.log(book);

console.log("სათაური (Dot):", book.title);
console.log("ავტორი (Dot):", book.author);
console.log("წელი (Dot):", book.year);
console.log("ჟანრი (Dot):", book.genre);
console.log("ფასი (Dot):", book.price);

console.log("სათაური (Bracket):", book["title"]);
console.log("ავტორი (Bracket):", book["author"]);
console.log("წელი (Bracket):", book["year"]);
console.log("ჟანრი (Bracket):", book["genre"]);
console.log("ფასი (Bracket):", book["price"]);


let sentence = `წიგნის სახელია "${book.title}", ავტორია ${book.author}, გამოიცა ${book.year} წელს, ჟანრია ${book.genre} და ღირს ${book.price} ლარი.`;
console.log(sentence);


// N2


let student = {
  name: "საბა სოხაშვილი",
  age: 13,
  faculty: "ვებ დეველოპერი",
  course: 1,
  averageGrade: 87.5
};


console.log(student);

console.log("სახელი (Dot):", student.name);
console.log("ასაკი (Dot):", student.age);
console.log("ფაკულტეტი (Dot):", student.faculty);
console.log("კურსი (Dot):", student.course);
console.log("საშუალო ქულა (Dot):", student.averageGrade);


console.log("სახელი (Bracket):", student["name"]);
console.log("ასაკი (Bracket):", student["age"]);
console.log("ფაკულტეტი (Bracket):", student["faculty"]);
console.log("კურსი (Bracket):", student["course"]);
console.log("საშუალო ქულა (Bracket):", student["averageGrade"]);

let sentence1 = `სტუდენტის სახელია ${student.name}, ის არის ${student.age} წლის, სწავლობს ${student.faculty}-ზე, არის ${student.course} კურსზე და მისი საშუალო ქულა არის ${student.averageGrade}.`;
console.log(sentence1);
