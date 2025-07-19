//1
let country = prompt('enter country: ');

let capital = prompt('enter capital: ');

console.log(`name: ${country},capital: ${capital}`);

//2

//arrow function

let shortArrowWay = name => `Welcome back ${name}`

console.log(shortArrowWay('lasha'));

let longArrowWay = () => {
    console.log(10+20);
};

longArrowWay();


//function
function math() {
    console.log(138-10)
};

math();

function num() {
    let num=0;
    if(num>5) {
        console.log('its more than 5')
    } else{
        console.log('its less than 5')
    };
};

//anonymous

let anonymous = function() {
    console.log(67%3);
};
anonymous();



