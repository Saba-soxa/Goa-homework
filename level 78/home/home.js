let images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/2048px-Eo_circle_blue_number-1.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_blue_number-2.svg/2048px-Eo_circle_blue_number-2.svg.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6m4fvVuDe2lLebD72GLisiIgr9oVG_19FA&s' ,
];

num=0;

function next() {
    let sliced = document.querySelector('#sliced');
    num++;
    if(num >= images.length){
        num=0
    }
    sliced.src = images[num];

};

function prev() {
    let sliced = document.querySelector('#sliced');
    num--;
    if(num>0) {
        num = images.length-1
    }
    sliced.src = images[num];
};


//2

let image = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFAoHUEQ7PBsW9cQCtqWbgcuJaYyCUk47_Q&s',
    'https://ralfvanveen.com/wp-content/uploads/2021/06/CSS-_-Glossary.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png' 
];

function html() {
    let sliced = document.getElementById('slicedi');
    
    if(num>0){
        num= num-2;
    };
    sliced.src = image[num];
    
    

};
function css() {
    let sliced = document.getElementById('slicedi');
    
    if (num<1) {
        num++;
        
    };
    sliced.src = image[num];
    
};
function js() {
    let sliced = document.getElementById('slicedi');
     
    if(num<2){
        num++;
    };
    sliced.src = image[num];
    
};



//3

let div =document.querySelector('.div1');

function green() {
    div.classList.add('green');
    div.classList.remove('red');
};


function redi() {
    div.classList.add('red');
    div.classList.remove('green');
};

