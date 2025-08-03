let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];

let passedCount = 0;

for (let score of scores) {
  if (score >= 70) {
    passedCount++;
  }
}

console.log("Number of students who passed:", passedCount);






const car = {
  brand: "Porsche",
  model: "911 GT3",
  color: "მწვანე"
};

console.log("თვისებები:");
for (let property in car) {
  console.log(property);
}

console.log("მნიშვნელობები:");
for (let property in car) {
  console.log(car[property]);
}
console.log(`ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი, მისი ფერი კი არის ${car.color}.`);
