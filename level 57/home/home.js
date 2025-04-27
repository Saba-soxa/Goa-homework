// N1

let name = prompt("შეიყვანე შენი სახელი:");
alert("მოგესალმები, " + name + "! სასიამოვნოა შენი გაცნობა!");

// N2

let a = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let b = Number(prompt("შეიყვანე მეორე რიცხვი:"));
let c = Number(prompt("შეიყვანე მესამე რიცხვი:"));
let d = Number(prompt("შეიყვანე მეოთხე რიცხვი:"));
let e = Number(prompt("შეიყვანე მეხუთე რიცხვი:"));

console.log("ჯამი:", a + b + c + d + e);
console.log("გაკლება:", a - b - c - d - e);
console.log("გამრავლება:", a * b * c * d * e);
console.log("გაყოფა:", a / b / c / d / e);
console.log("ხარისხში აყვანა:", a ** 2, b ** 2, c ** 2, d ** 2, e ** 2);
console.log("ნაშთით გაყოფა:", a % b, c % d, e % a);

// N3

let user1 = prompt("პირველი მომხმარებელი: როგორ ხარ?");
let user2 = prompt("მეორე მომხმარებელი: უპასუხე პირველ მომხმარებელს:");

console.log("პირველი მომხმარებელი:", user1);
console.log("მეორე მომხმარებელი:", user2);

user1 = prompt("პირველი მომხმარებელი: რას შვები დღეს?");
user2 = prompt("მეორე მომხმარებელი: უპასუხე პირველ მომხმარებელს:");

console.log("პირველი მომხმარებელი:", user1);
console.log("მეორე მომხმარებელი:", user2);

// N4

let x = 5;
x++;
console.log(x);

let y = 10;
y++;
console.log(y);

let z = -3;
z++;
console.log(z);

let a = 0;
a++;
console.log(a);

let b = 99;
b++;
console.log(b);

// N5

let x = 5;
x--;
console.log(x);

let y = 10;
y--;
console.log(y);

let z = -3;
z--;
console.log(z);

let a = 0;
a--;
console.log(a);

let b = 99;
b--;
console.log(b);

// N6

let x = 5;
console.log(x++);
console.log(x);

let y = 7;
console.log(y++);
console.log(y);

let z = 0;
console.log(z++);
console.log(z);

let a = -1;
console.log(a++);
console.log(a);

let b = 99;
console.log(b++);
console.log(b);

// N7

let x = 5;
console.log(++x); 

let y = 7;
console.log(++y);

let z = 0;
console.log(++z);

let a = -1;
console.log(++a);

let b = 99;
console.log(++b);
