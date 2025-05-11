function guessPassword() {
  let correctPassword = "Group 55 is best";
  let attempts = 3;

  while (attempts > 0) {
    let input = prompt("შეიყვანეთ პაროლი:");
    if (input === correctPassword) {
      alert("თქვენი შეყვანილი პაროლი სწორია");
      return;
    } else {
      attempts--;
      if (attempts === 0) {
        alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
      } else {
        alert("არასწორია! დარჩენილი ცდები: " + attempts);
      }
    }
  }
}
guessPassword();


// N2

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(n + "-ის ფაქტორიალია:", result);
}
factorial(5); 


// N3

function countdown() {
  for (let i = 100; i >= 0; i--) {
    console.log("დარჩენილია " + i + " წამი");
  }
}
countdown();
