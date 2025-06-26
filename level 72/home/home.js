// N1
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Leap year
      } else {
        return false; // Not leap
      }
    } else {
      return true; // Leap year
    }
  } else {
    return false; // Not leap
  }
}

// Prompt user for input
let year = prompt("Enter a year:");
year = parseInt(year);

if (isLeapYear(year)) {
  alert(year + " is a leap year ✅");
} else {
  alert(year + " is not a leap year ❌");
}

// N2
let input = prompt("შეიყვანე სახელები მძიმით გამოყოფილად:");
let names = input.split(", ");
let payer = names[Math.floor(Math.random() * names.length)];
alert(payer + " უნდა გადაიხადოს ყველას საკვების ფული 💸");


// N3

let result = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  }
  // სხვანაირად არაფერი არ ვამატებთ
}

console.log(result);


// N4
function generateRandomAverage(N) {
  let numbers = [];
  let sum = 0;

  for (let i = 0; i < N; i++) {
    let randomNum = Math.floor(Math.random() * 101); // 0-100
    numbers.push(randomNum);
    sum += randomNum;
  }

  let average = sum / N;

  console.log("შემთხვევითი რიცხვები:", numbers);
  console.log("საშუალო არითმეტიკული:", average);

  return average;
}

// გამოყენება:
let avg = generateRandomAverage(10); // მაგ: 10 შემთხვევითი რიცხვი


