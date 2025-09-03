const basic = {
  warmup: "10 push-ups",
  cardio: "15 mins running"
};

const advanced = {
  strength: "50kg bench press",
  endurance: "30 mins cycling"
};

const total = Object.assign({}, basic, advanced);

console.log(total);
