const a = 4;

const proto = Object.getPrototypeOf(a);

console.log(proto);

function someFunc() {}
console.log(Object.getPrototypeOf(someFunc));

// arrow nemaju definisan pr,ototype
// ali imaju __proto__
const someArrowFunc = () => {};
console.log(someArrowFunc.prototype);

function Person(ime, prezime) {
  // this = {_proto_ = Person.prototype}
  this.ime = ime;
  this.prezime = prezime;
  this.print = function () {
    return `Ime: ${this.ime}, Prezime: ${this.prezime}`;
  };
  // return this
}

const p1 = new Person('Darko', 'Gligorijevic');
const p2 = new Person('Marko', 'Markovic');

// Person -> constructor function
// Person.prototype -> prototipski objekat instance objekta
// p1.__proto__ === Person.prototype
Person.prototype.getFullName = function () {
  return this.ime + ' ' + this.prezime;
};

const Person2 = class {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
};
console.log(new Person('Petar', 'Peric'));
