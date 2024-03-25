interface Coordinate {
  x: number;
  y: number;
}

interface LocationData extends Coordinate {
  name: string;
}

// type alias
// ovo je semanticka informacija, to je moja namera iza type aliasa
// semantiku mogu na ovaj nacin sakrtii kroz tipove
type Centimeters = number;
// iako je tip string, stavi alias type da bude ID
type ID = string;

interface Size {
  // ne moras verbose da budes u imenu (widthInCentimeters)
  width: Centimeters;
  height: Centimeters;
}

const point: LocationData = { x: 32, y: 25, name: 'Nis' };

// proslo bi zbog duck typing
const point2 = { x: 22, y: 55, z: 24 };

interface DistanceCalculator {
  (coords: Coordinate): number;
}

const getDistance2: DistanceCalculator = function (coords: Coordinate) {
  return coords.y;
};

function getDistance(coords: LocationData): number {
  return Math.sqrt(Math.pow(coords.x, 2) + Math.pow(coords.y, 2));
}

console.log('tacka', point);
console.log(`Distanca je ${getDistance(point)}`);
// Duck typing

const room: Size = {
  width: 30,
  height: 20,
};

console.log(room);
