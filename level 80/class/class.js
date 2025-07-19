function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}


function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}



function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

