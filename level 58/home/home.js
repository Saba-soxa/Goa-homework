// N1

let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));
let num3 = Number(prompt("შეიყვანე მესამე რიცხვი:"));
let num4 = Number(prompt("შეიყვანე მეოთხე რიცხვი:"));
let num5 = Number(prompt("შეიყვანე მეხუთე რიცხვი:"));

console.log("num1 > num2:", num1 > num2);
console.log("num2 < num3:", num2 < num3);
console.log("num3 >= num4:", num3 >= num4);
console.log("num4 <= num5:", num4 <= num5);
console.log("num5 == num1:", num5 == num1);
console.log("num1 != num3:", num1 != num3);
console.log("num2 === num4:", num2 === num4);


// N2


let text1 = "ეს არის ტექსტი ორმაგ ბრჭყალებში.";
console.log(text1);

let text2 = 'ეს არის ტექსტი ერთი ბრჭყალებით.';
console.log(text2);

let name = "გიორგი";
let text3 = `მოგესალმები, ${name}!`;  
console.log(text3);

let text4 = "მან თქვა: \"გამარჯობა ყველა!\"";
console.log(text4);

let text5 = 'მან თქვა: "დაბრძანდით, გთხოვთ."';
console.log(text5);

// N3

let text = "He said";
console.log(text);

// N4

let balance = 450000;
let withdraw = 9000;

balance -= withdraw;

console.log(balance);

