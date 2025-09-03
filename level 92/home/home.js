class Specimen {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  getLabel() {
    return `ID: ${this.id}, Type: ${this.type}`;
  }
}

class MutantSpecimen extends Specimen {
  constructor(id, type, mutationLevel) {
    super(id, type);
    this.mutationLevel = mutationLevel;
  }

  getLabel() {
    return `ID: ${this.id}, Type: ${this.type}, Mutation Level: ${this.mutationLevel}`;
  }

  static mostMutated(arr) {
    return arr.reduce((max, specimen) =>
      specimen.mutationLevel > max.mutationLevel ? specimen : max
    );
  }
}

const s1 = new MutantSpecimen(1, "Virus", 50);
const s2 = new MutantSpecimen(2, "Bacteria", 70);
const s3 = new MutantSpecimen(3, "Fungus", 40);

console.log(s1.getLabel());
console.log(s2.getLabel());
console.log(s3.getLabel());

const mostMutatedSpecimen = MutantSpecimen.mostMutated([s1, s2, s3]);
console.log("Most Mutated:", mostMutatedSpecimen.getLabel());

class Vehicle {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h`;
  }
}

class ElectricVehicle extends Vehicle {
  constructor(model, speed, batteryLife) {
    super(model, speed);
    this.batteryLife = batteryLife;
  }

  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h, Battery Life: ${this.batteryLife} hours`;
  }

  static compareSpeed(v1, v2) {
    return v1.speed > v2.speed ? v1 : v2;
  }
}

const car1 = new ElectricVehicle("Tesla Model S", 250, 12);
const car2 = new ElectricVehicle("Nissan Leaf", 150, 8);

console.log(car1.getInfo());
console.log(car2.getInfo());

const fasterCar = ElectricVehicle.compareSpeed(car1, car2);
console.log("Faster Vehicle:", fasterCar.getInfo());


class Agent {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }

  getStatus() {
    return `Agent: ${this.name}, Version: ${this.version}`;
  }
}

class FieldAgent extends Agent {
  constructor(name, version, location) {
    super(name, version);
    this.location = location;
  }

  getStatus() {
    return `Agent: ${this.name}, Version: ${this.version}, Location: ${this.location}`;
  }

  static latestVersion(a1, a2) {
    return a1.version > a2.version ? a1 : a2;
  }
}

const agent1 = new FieldAgent("Alpha", 1.2, "Berlin");
const agent2 = new FieldAgent("Beta", 2.0, "Tokyo");

console.log(agent1.getStatus());
console.log(agent2.getStatus());

const latestAgent = FieldAgent.latestVersion(agent1, agent2);
console.log("Latest Version Agent:", latestAgent.getStatus());

class Sequence {
  constructor(code, length) {
    this.code = code;
    this.length = length;
  }

  getSummary() {
    return `Code: ${this.code}, Length: ${this.length}`;
  }
}

class MutatedSequence extends Sequence {
  constructor(code, length, mutationType) {
    super(code, length);
    this.mutationType = mutationType;
  }

  getSummary() {
    return `Code: ${this.code}, Length: ${this.length}, Mutation: ${this.mutationType}`;
  }

  static filterByLength(arr, min) {
    return arr.filter(seq => seq.length > min);
  }
}

const seq1 = new MutatedSequence("ATCG", 50, "Insertion");
const seq2 = new MutatedSequence("GGTA", 30, "Deletion");
const seq3 = new MutatedSequence("CTAG", 70, "Duplication");

console.log(seq1.getSummary());
console.log(seq2.getSummary());
console.log(seq3.getSummary());

const longSequences = MutatedSequence.filterByLength([seq1, seq2, seq3], 40);
console.log("Sequences longer than 40:");
longSequences.forEach(seq => console.log(seq.getSummary()));


class Satellite {
  constructor(id, orbitType) {
    this.id = id;
    this.orbitType = orbitType;
  }

  getDetails() {
    return `ID: ${this.id}, Orbit: ${this.orbitType}`;
  }
}

class MilitarySatellite extends Satellite {
  constructor(id, orbitType, encryptionLevel) {
    super(id, orbitType);
    this.encryptionLevel = encryptionLevel;
  }

  getDetails() {
    return `ID: ${this.id}, Orbit: ${this.orbitType}, Encryption Level: ${this.encryptionLevel}`;
  }

  static countByOrbit(arr, type) {
    return arr.filter(sat => sat.orbitType === type).length;
  }
}

const sat1 = new MilitarySatellite("SAT-001", "LEO", "High");
const sat2 = new MilitarySatellite("SAT-002", "GEO", "Medium");
const sat3 = new MilitarySatellite("SAT-003", "LEO", "Top-Secret");

console.log(sat1.getDetails());
console.log(sat2.getDetails());
console.log(sat3.getDetails());

const leoCount = MilitarySatellite.countByOrbit([sat1, sat2, sat3], "LEO");
console.log("Satellites in LEO Orbit:", leoCount);


class Piece {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  getDetails() {
    return `Shape: ${this.shape}, Color: ${this.color}`;
  }
}

class RarePiece extends Piece {
  constructor(shape, color, rarityScore) {
    super(shape, color);
    this.rarityScore = rarityScore;
  }

  getDetails() {
    return `Shape: ${this.shape}, Color: ${this.color}, Rarity Score: ${this.rarityScore}`;
  }

  static rarestPiece(arr) {
    return arr.reduce((rarest, piece) =>
      piece.rarityScore > rarest.rarityScore ? piece : rarest
    );
  }
}

const p1 = new RarePiece("Triangle", "Red", 50);
const p2 = new RarePiece("Circle", "Blue", 80);
const p3 = new RarePiece("Square", "Green", 65);

console.log(p1.getDetails());
console.log(p2.getDetails());
console.log(p3.getDetails());

const rarest = RarePiece.rarestPiece([p1, p2, p3]);
console.log("Rarest Piece:", rarest.getDetails());


class Vision {
  constructor(type, intensity) {
    this.type = type;
    this.intensity = intensity;
  }

  getSummary() {
    return `Type: ${this.type}, Intensity: ${this.intensity}`;
  }
}

class FutureVision extends Vision {
  constructor(type, intensity, timestamp) {
    super(type, intensity);
    this.timestamp = timestamp;
  }

  getSummary() {
    return `Type: ${this.type}, Intensity: ${this.intensity}, Timestamp: ${this.timestamp}`;
  }

  static filterByIntensity(arr, threshold) {
    return arr.filter(vision => vision.intensity >= threshold);
  }
}

const v1 = new FutureVision("Storm", 70, "2025-09-05");
const v2 = new FutureVision("Eclipse", 40, "2025-09-10");
const v3 = new FutureVision("Earthquake", 90, "2025-09-15");

console.log(v1.getSummary());
console.log(v2.getSummary());
console.log(v3.getSummary());

const intenseVisions = FutureVision.filterByIntensity([v1, v2, v3], 60);
console.log("Visions with Intensity >= 60:");
intenseVisions.forEach(v => console.log(v.getSummary()));
