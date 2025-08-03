const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log("All numbers are even:", allEven);




const strings = ["cat", "elephant", "dog", "monkey"];
const hasLongString = strings.some(str => str.length > 5);
console.log("Has string with length > 5:", hasLongString);





const original = [1, 2, 3, 4];
const doubledNumbers = [];

original.forEach(num => {
  doubledNumbers.push(num * 2);
});
console.log("Doubled numbers:", doubledNumbers);




const users = [
  { name: "Luka", age: 20 },
  { name: "Nino", age: 25 },
  { name: "Giorgi", age: 18 }
];

const allAdults = users.every(user => user.age >= 18);
console.log("All users are adults:", allAdults);





const products = [
  { name: "Book", price: 15 },
  { name: "Pen", price: 5 },
  { name: "Notebook", price: 25 }
];

const hasAffordableProduct = products.some(product => product.price < 20);
console.log("Has affordable product:", hasAffordableProduct);




const customerOrders = [
  {
    orderId: 1,
    customerId: 101,
    items: [
      { title: "JS Guide", price: 15, quantity: 1 },
      { title: "React Handbook", price: 25, quantity: 1 }
    ],
    shippingAddress: "Tbilisi, Georgia",
    isDelivered: true
  },
  {
    orderId: 2,
    customerId: 102,
    items: [
      { title: "Node in Depth", price: 30, quantity: 2 }
    ],
    shippingAddress: "Kutaisi, Georgia",
    isDelivered: false
  },
  {
    orderId: 3,
    customerId: 103,
    items: [],
    shippingAddress: "Batumi, Georgia",
    isDelivered: true
  }
];

const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log("All orders have items:", allOrdersHaveItems);

const hasPendingDelivery = customerOrders.some(order => order.isDelivered === false);
console.log("Has pending delivery:", hasPendingDelivery);

customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);

  order.items.forEach(item => {
    console.log(` - ${item.title} (Quantity: ${item.quantity})`);
  });

  const allExpensive = order.items.every(item => item.price > 10);
  console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);

  const hasMultipleCopies = order.items.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
});




