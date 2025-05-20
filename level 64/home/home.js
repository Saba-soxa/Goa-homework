// N1

function allMathOperations(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    division: a / b,
    power: a ** b,
    modulo: a % b
  };
}


// N2

function sumOfSquares(a, b) {
  return a ** 2 + b ** 2;
}

// N3

function isEven(n) {
  return n % 2 === 0 ? "even" : "odd";
}


// N4

function repeatString(str, times) {
  return str.repeat(times);
}


// N5

function longerWord(word1, word2) {
  if (word1.length > word2.length) return word1;
  if (word2.length > word1.length) return word2;
  return "equal";
}


// N6

function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


// N7

function isPositive(number) {
  return number > 0 ? "yes" : "no";
}


// N8

function double(n) {
  return n * 2;
}

// N9

function fullName(first, last) {
  return first + " " + last;
}


// N10

function isAdult(age) {
  return age >= 18 ? "adult" : "minor";
}


// N11

function hasA(word) {
  return word.toLowerCase().includes("a") ? "yes" : "no";
}

// N12

function sameLastDigit(a, b) {
  return a % 10 === b % 10 ? "same" : "different";
}


// N13

function evenOrOdd(n) {
  return n % 2 === 0 ? "even" : "odd";
}


// N14

function isShort(text) {
  return text.length < 5 ? "short" : "long";
}


// N15

function numberSign(n) {
  return n > 0 ? "positive" : n === 0 ? "zero" : "negative";
}
