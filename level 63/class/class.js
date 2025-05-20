// N1

let result = 1;

for (let i = 1; i <= 10000; i++) {
  result *= i;

  if (result > 10000) {
    break;
  }
}

console.log(result);

// N2

for (let i = 1; i <= 200; i++) {
  if (i === 105) {
    break; 
  }
  
  if (i % 3 === 0) {
    continue; 
  }

  console.log(i); 
}

