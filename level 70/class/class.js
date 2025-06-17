// N1
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};


// N2
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// N3
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}