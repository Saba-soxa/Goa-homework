// N1
function Flight(flightID, status) {
  this.flightID = flightID;
  this.status = status;
}
let flightID = "NGT 929";
let status = "landed";

let flight = new Flight(flightID, status);

console.log("Flight " + flight.flightID + " has " + flight.status);


// N2

class Product {
  constructor(id, price) {
    this.id = id;
    this.price = price;
  }

  changePrice(discount) {
  
    this.price = this.price - (discount / 100) * this.price;
  }
}

const productId = prompt("შეიყვანე პროდუქტის ID:");
const price = parseFloat(prompt("შეიყვანე ფასი:"));
const discount = parseFloat(prompt("შეიყვანე ფასდაკლება (%):"));

const product = new Product(productId, price);
console.log(`${product.id} price: ${product.price}`);
product.changePrice(discount);
console.log(`${product.id} new price: ${product.price}`);
