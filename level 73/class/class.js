// N1
function getDayOfWeek(year, month, day) {
    const date = new Date(year, month - 1, day); // თვე იწყება 0-დან, ამიტომ ვაკლებთ 1-ს
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

// მაგალითის ტესტირება:
console.log(getDayOfWeek(1993, 7, 12)); // უნდა დაბეჭდოს: Thursday




