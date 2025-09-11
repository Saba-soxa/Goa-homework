// N1
function sayHello() {
  console.log("Hello");
}

function sayWorld() {
  console.log("World");
}

sayHello();
sayWorld();


// N2
function firstAsync() {
  setTimeout(() => {
    console.log("First async done (2 sec)");
  }, 2000);
}

function secondAsync() {
  setTimeout(() => {
    console.log("Second async done (1 sec)");
  }, 1000);
}

firstAsync();
secondAsync();


// N3 
console.log("Start program");

setTimeout(() => {
  console.log("Async 1 done (2 sec)");
}, 2000);

setTimeout(() => {
  console.log("Async 2 done (1 sec)");
}, 1000);

console.log("End program");




// N4

const start = Date.now();

function async500() {
  setTimeout(() => {
    console.log(`${Date.now() - start}ms  -> async500: done (500ms)`);
  }, 500);
}

function async1500() {
  setTimeout(() => {
    console.log(`${Date.now() - start}ms  -> async1500: done (1500ms)`);
  }, 1500);
}

function async2000() {
  setTimeout(() => {
    console.log(`${Date.now() - start}ms  -> async2000: done (2000ms)`);
  }, 2000);
}

async500();
async1500();
async2000();



// N5

const start2 = Date.now();

console.log(`${Date.now() - start2}ms  -> User logged in`);

setTimeout(() => {
  console.log(`${Date.now() - start2}ms  -> Fetching data... (2s)`);
}, 2000);

setTimeout(() => {
  console.log(`${Date.now() - start2}ms  -> Data received (1s)`);
}, 1000);
