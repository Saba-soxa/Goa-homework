function XO(str) {
    str = str.toLowerCase();
    return str.split('x').length === str.split('o').length;
  }

  function gimme(triplet) {
    const [a, b, c] = triplet;
  
    if ((a > b / a < c / a > c)) {
      return 0; 
    } else if ((b > a / b < c / b > c)) {
      return 1; 
    } else {
      return 2; 
    }
  }
  

  function getDivisorsCnt(n) {
    let count = 0;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= limit; i++) {
      if (n % i === 0) {
        count += 2;                
      }
    }
    if (limit * limit === n) count--; 
    return count;
  }
  

  function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return Math.floor(sum / marks.length);
  }
  

  function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return Math.floor(sum / marks.length);
  }
  