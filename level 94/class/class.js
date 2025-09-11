function syncFunc1() {
  console.log("სინქრონული ფუნქცია 1 შესრულდა");
}

function syncFunc2() {
  console.log("სინქრონული ფუნქცია 2 შესრულდა");
}



async function asyncFunc1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ასინქრონული ფუნქცია 1 (2 წამი) შესრულდა");
    }, 2000);
  });
}

async function asyncFunc2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ასინქრონული ფუნქცია 2 (1 წამი) შესრულდა");
    }, 1000);
  });
}

// ჯერ სინქრონული
syncFunc1();
syncFunc2();

// მერე ასინქრონული
asyncFunc1().then((res) => console.log(res));
asyncFunc2().then((res) => console.log(res));
