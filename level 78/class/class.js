let images = [
    'https://t4.ftcdn.net/jpg/03/05/46/75/360_F_305467506_QczGkOYLChAeFpjsLrzFltFXwxunx0xE.jpg',
    'https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliodHAAPRrEECgFZXzZoLvT9qnAyRC4YSIQ&s' 
];
let num = 0;
function prog() {
    let sliced = document.getElementById('slicedi');
    
    if(num>0){
        num= num-2;
    };
    sliced.src = images[num];
    
    

};
function gra() {
    let sliced = document.getElementById('slicedi');
    
    if (num<1) {
        num++;
        
    };
    sliced.src = images[num];
    
};
function mex() {
    let sliced = document.getElementById('slicedi');
     
    if(num<2){
        num++;
    };
    sliced.src = images[num];
    
};