// Task 1
const enhancedPotion = ['phoenix feather', ...baseIngredients, ...['moon dust', 'sun ray']];

// Task 2
const dnaArray = dna.split('|');
const dnaWithX = [];
for (let i = 0; i < dnaArray.length; i++) {
  dnaWithX.push(dnaArray[i]);
  if (i < dnaArray.length - 1) dnaWithX.push('X');
}

// Task 3
const finalStats = { ...baseStats, ...enchantment, weight: 10 };

// Task 4
const [first, second, ...remainingThoughts] = thoughts;

// Task 5
const newArray = [...base, 'reactor'];
