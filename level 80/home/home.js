function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}




function digitize(n) {
  return Array.from(String(n), Number).reverse();
}





function check(a,x){
  return a.includes(x);
};




function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}



function validateNumber(str) {
  let cleanStr = str.replace("+44", "0").replaceAll("-", "");
  if (cleanStr.length === 11 && cleanStr.startsWith("07")) return "In with a chance";
  return "Plenty more fish in the sea";
}