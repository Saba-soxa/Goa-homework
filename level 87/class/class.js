function number(busStops) {
    let passengers = 0;
    for (let [on, off] of busStops) {
      passengers += on - off;
    }
    return passengers;
  }

  
  function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i+1] && numbers[i] !== numbers[i+2]) {
        return numbers[i];
      }
    }
  }
  