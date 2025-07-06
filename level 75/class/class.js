let firstById = document.getElementById('heading1');

console.log(firstById);

let secondByClass = document.getElementsByClassName('heading2');

console.log(secondByClass);

let third = document.querySelector('p');

console.log(third);

firstById.style.color = 'red' ; 

firstById.style.fontFamily = 'cursive';

third.style.backgroundColor = 'pink ' ; 

secondByClass[0].style.color = 'yellow' ;

firstById.innerHTML = 'firssst' ; 

secondByClass[1].innerHTML =  'secondd' ; 

third.innerText = 'thirdddd' ;