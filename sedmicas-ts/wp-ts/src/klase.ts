import Circle from './models/circle';
import { Community } from './models/community';
import { Radnik, Student, Person } from './models/person';
import Square from './models/square';

const krug = new Circle(3.0);
console.log(`Pk-${krug.getArea()}`);

const kvadrat = new Square(4.0);
console.log(`Ps-${kvadrat.getArea()}`);

// Ovde je pokazao konacan primer za Generics za Community i za Person
const marko: Student = {
  id: 'wedsd',
  name: 'Marko',
  age: 20,
  prosekOcena: 8.5,
};

const petar: Radnik = {
  id: 'dsada2',
  name: 'Petar',
  age: 22,
  // 400 cega ? evra, u type stavi
  prosekPlata: 400,
};

const community = new Community<Person>();
community.add(marko);
community.add(petar);
console.log(`Prosek godina je: ${community.getAverageAge()}`);
