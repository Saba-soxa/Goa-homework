// N1
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

// N2
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}


// N3
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

// N4
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// N5
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
