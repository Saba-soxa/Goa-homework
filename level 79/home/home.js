//1
let num = 0;


function increasescore(){
    if(5>0){
        num+=10;
    }
    
};

increasescore();
increasescore();

console.log(num)

//2

function secretScore() {
    let score = '1234';
};
secretScore();

//console.log(score); ამოაგდებს ერორს რადგან score არის ლოკალური


//3

let str = 'world'

function test() {
    let alice = 'alice';
    console.log(str);
    console.log(alice);

};
test();
//console.log(alice);  ამოაგდებს ერორს რადგან alice არის ლოკალური

//4

function counterGame() {
    let counter = 0;
    counter+=1;
    console.log(counter) //ერთხელ არის ფუნქცია გამოძახებული ანუ ერთი მოემატება
};
counterGame();

//5

 
function property() {
    testi = 'test';
    console.log(testi) 
};

property();


//6

//გლობალ არის ფუნქციის გარეთ რომელიც მუშაობს ყველგან

//7

//ლოკალური არის ფუნქციაში შექმნილი ცვლადი რომელიც მხოლოდ ფუნქციაში მოქმედებს

//11

let sum = sum => 7+29 ;

console.log(sum());

//12

let mul = (muli) => muli *2 ;

console.log(mul(7));


//13



let firstchar = () => {
    let str = 'string';
    console.log(str[0]);
};

console.log(firstchar());
//14
let st = (str) => str.toUpperCase()  ;


console.log(st('hello'));

//15
 let isPrime = () => {
        let number = prompt('Entr your number: ');
        if (number <= 1 ){
            alert('არ არის პრაიმი');
            return false;
        }
        for (let i = 2; i < number; i++) {
            if (number % i ==0){
                alert('არ არის პრაიმი');
                return false;
            }
        }
        alert('პრაიმია')
        return true
    };




//16

let testNum = () => {
    let num = prompt('enter num: ')
    if( num>0) {
        console.log('positive');
    } else if (num===0) {
        console.log('zero')
    }else{
        console.log('negative');
    }
};

console.log(testNum());


//17

let fizzBuzz = () => {
    let num = prompt('enter num: ');
    if (num%3===0 && num%5===0) {
        console.log('fizzbuzz');
    }else if (num%3===0 ) {
        console.log('fizz')
    } else if (num%5===0){
        console.log('buzz')
    } else{
        console.log('The number itself, if its divisible by neither');
    };
};

console.log(fizzBuzz());





