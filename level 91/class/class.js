const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];

const nebulaBackup = [...nebulaStock];

const updatedNebulaStock = [...nebulaStock, 'gravity lens'];

const celestialDrops = [...'meteor|comet|nova'.split('|')];

const fullInventory = [...nebulaStock, ...asteroidStock, ...celestialDrops];

console.log(nebulaBackup);      
console.log(updatedNebulaStock); 
console.log(celestialDrops);     
console.log(fullInventory);      