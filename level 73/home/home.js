function showFormattedDateTime() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
}


function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return `Age: ${years} years, ${months} months, ${days} days`;
}


function getWeekday(dateString) {
  const date = new Date(dateString);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}


let counter = 0;
setInterval(() => {
  console.log("Seconds passed:", counter++);
}, 1000);


function displayCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(displayCurrentTime, 1000);


setInterval(() => {
  console.log("Random number:", Math.random());
}, 1000);


function showDelayedMessage(message, delay) {
  setTimeout(() => {
    alert(message);
  }, delay);
}



setTimeout(() => {
  console.log("Hello, friend!");
}, 1000);



function firstMessage() {
  console.log("First message");
}
function secondMessage() {
  console.log("Second message");
}
function thirdMessage() {
  console.log("Third message");
}

setTimeout(firstMessage, 1000);
setTimeout(secondMessage, 2000);
setTimeout(thirdMessage, 3000);



function updateGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  document.getElementById("greeting").textContent = greeting;
}

setInterval(updateGreeting, 1000);