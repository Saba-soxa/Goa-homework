function loveCalculator(name1, name2) {
  // შემთხვევითი პროცენტი 1-დან 100-მდე
  const lovePercent = Math.floor(Math.random() * 100) + 1;

  // ტექსტის გამოტანა alert-ის საშუალებით
  alert(`${name1} და ${name2}, თქვენი სიყვარულის პროცენტია ${lovePercent}%`);
}

// მაგალითად შეგიძლია გამოძახო ასე:
loveCalculator("ნიკა", "მარიამი");
