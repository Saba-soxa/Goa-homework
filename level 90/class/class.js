// ფუნქციის შექმნა
function sumNumbers(...numbers) {

  if (numbers.length === 0) {
    return 0;
  }


  return numbers.reduce((sum, num) => sum + num, 0);
}


console.log(sumNumbers(1, 2, 3));       // 6
console.log(sumNumbers(5, 10, 15, 20)); // 50
console.log(sumNumbers());              // 0
console.log(sumNumbers(100));           // 100



