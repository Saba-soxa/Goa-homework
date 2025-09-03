const name = "Ana";
const age = 20;

const student = {
  name,  
  age   
};

console.log(student); 


const mathUtils = {
    add(x, y) {
      return x + y;
    }
  };
  
  console.log(mathUtils.add(5, 3)); 


  const key = "score";

const game = {
  name: "Football",
  [key]: 100   
};

console.log(game); 


const brand = "Apple";
const model = "iPhone 15";

const phone = {
  brand,
  model,
  getInfo() {
    return `${brand} - ${model}`;
  }
};

console.log(phone.getInfo()); 



const a = "first";
const b = "second";

const obj = {
  [a + "Name"]: "Nika",
  [b + "Name"]: "Luka"
};

console.log(obj); 




  