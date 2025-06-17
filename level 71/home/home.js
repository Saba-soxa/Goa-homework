// N1
function modifyArray(inputArray) {
  
  const numsArray = [1, 2, 3, 4, 5];
  const strArray = ["a", "b", "c", "d", "e"];

let combinedArray = numsArray.concat(strArray);
combinedArray.copyWithin(4, 0, 3); 
combinedArray.fill("filled", 2, 5); 
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100, 200);

return combinedArray;

}

console.log(modifyArray());


// N2

const people = [{ name: "Alice" }, { name: "Bob" }];
const places = [{ city: "Paris" }, { city: "London" }];

let mergedArray = people.concat(places);
mergedArray.copyWithin(2, 0, 2);
mergedArray.fill({ city: "New York" }, mergedArray.length - 2);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift({ name: "Charlie" }, { name: "David" });


// N3

const mixedArray = [1, "two", 3, "four", 5];
let extendedArray = mixedArray.concat([true, false]);
extendedArray.copyWithin(0, 2, 4);
extendedArray.fill(0, 4, 7);
extendedArray.pop();
extendedArray.shift();
extendedArray.unshift(null, undefined);


// N4

function comprehensiveArrayTask(arr1, arr2, arr3) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.copyWithin(5, 0, 3);
  mergedArray.fill(0, 6);
  mergedArray.pop();
  mergedArray.shift();
  mergedArray.unshift(100, 200);
  mergedArray.splice(2, 2, ...arr3);
  let slicedArray = mergedArray.slice(-5);
  return slicedArray.join(",");
}


// N5

const students = ["Alice", "Bob", "Charlie"];
const grades = [85, 90, 78];

function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

function updateGrades(newValue) {
  grades.fill(newValue);
  return grades;
}


// N6

let playlist = ["Song A", "Song B", "Song C", "Song D"];

function addSong(songTitle) {
  playlist.unshift(songTitle);
  return playlist;
}

function removeLastSong() {
  playlist.pop();
  return playlist;
}

function moveSongs() {
  playlist.copyWithin(playlist.length - 2, 0, 2);
  return playlist;
}

function combinePlaylists(secondPlaylist) {
  return playlist.concat(secondPlaylist);
}


// N7

let cartItems = ["Apple", "Banana", "Orange"];
let prices = [1.2, 0.5, 0.8];

function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems, prices };
}

function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems, prices };
}

function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice);
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(",");
}

function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}


// N8

let library = [
  { title: "Book A", copies: 3 },
  { title: "Book B", copies: 5 },
  { title: "Book C", copies: 2 }
];

function addBook(book) {
  library.push(book);
  return library;
}

function removeLastBook() {
  library.pop();
  return library;
}

function updateBookCopies(title, newCopies) {
  const index = library.findIndex(book => book.title === title);
  if (index !== -1) {
    library.splice(index, 1, { ...library[index], copies: newCopies });
  }
  return library;
}

function listBooks() {
  return library.map(book => book.title).join(",");
}

function extractBooks() {
  return library.slice(0, 2);
}

function modifyBooks() {
  library.copyWithin(library.length - 1, 0, 1);
  return library;
}

function resetCopies(newCopyValue) {
  library = library.map(book => ({ ...book, copies: newCopyValue }));
  return library;
}

function removeFirstBook() {
  library.shift();
  return library;
}

function addFirstBook(book) {
  library.unshift(book);
  return library;
}
