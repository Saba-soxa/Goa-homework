// N1

for (let i = 1; i <= 100; i++) {
  if (i === 50) {
    break;
  }
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}



// N2

for (let i = 1; i <= 20; i++) {
  if (i === 7 || i === 13) {
    continue;
  }
  console.log(i);
}



// N3

for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    continue; 
  }
  if (i % 8 === 0) {
    break; 
  }
  console.log(i);
}


// N4

for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    continue;
  }
  console.log(i);
}

