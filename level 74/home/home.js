//1
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}
//2
const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};




//3
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) return [];
  let cout = [0,0];
  for(let i=0;i < input.length; i++){
    input[i] > 0 ? cout[0] += 1 : cout[1] += input[i];
  }
  return cout;
}


//4
function replace(s) {
   return s.replace(/[aeiouAEIOU]/g, '!');
 
}

//5
function sameCase(a, b){
  if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
  if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
  if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
  return 1;
}
//6
function printerError(s) {
  return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}
//7
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}