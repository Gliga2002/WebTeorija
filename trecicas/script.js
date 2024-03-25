console.log('Hello World');

// dynamic and not type safe

// dynamic
let darko = 'ime';
darko = 5;
console.log(darko);

// not type safe
if ('darko') {
  console.log('Ovde');
}

// let, var, const

// JS tipovi, reference vs primitive types
const x = {
  ime: 'Darko',
  prezime: 'Gligorijevic',
};
let y = x;
y.prezime = 'Markovic';

console.log(x, y);

console.log(max(4, 7));

//Functions
// FD & hoisting
function max(a, b) {
  return a > b ? a : b;
}
// FE
const max2 = function (a, b) {
  return a > b ? a : b;
};
// Arrow
const max3 = (a, b) => (a > b ? a : b);

console.log(max2(10, 5));
console.log(max3(6, 4));

const niz = [2, 4, 7, 8, 10, 16, 20];

// Imperative
let suma = 0;
for (let i = 0; i < niz.length; i++) {
  suma += niz[i];
}

console.log(`Suma: ${suma}`);

// Declarative
// arrow inside method
console.log(`Suma:${niz.reduce((acc, cur) => (acc += cur), 0)}`);

// FE inside method
console.log(
  `Suma:${niz.reduce(function (acc, cur) {
    return acc + cur;
  })}`
);

const parni = niz.filter((broj) => broj % 2 === 0);
console.log(`Parni brojevi su: ${parni}`);

// Suma parnih brojeva
console.log(
  niz.filter((broj) => broj % 2 === 0).reduce((acc, curr) => (acc += curr))
);

const niz2 = niz.map((broj) => broj + 3);
console.log(`Map:${niz2}`);

// Dodaj + 3 na svaki element niza, isfiltiraj parne i nadji sumu
console.log(
  niz
    .map((broj) => broj + 3)
    .filter((broj) => broj % 2 === 0)
    .reduce((acc, curr) => (acc += curr), 0)
);

const recenica = 'Web programiranje je predmet na 3. godini';
const splitRecenica = recenica.split(' ');
console.log(splitRecenica);
const joinRecenica = splitRecenica.join('');
console.log(joinRecenica);

// kao sto je window global obj tako je i ovo starting obj za DOM (ima mnostvo metoda i properties)
const liItems = document.querySelectorAll('ul.list li');
liItems.forEach((el) =>
  el.addEventListener('click', (event) => {
    console.log('Clicked');
    event.target.style.border = '1px solid green';
  })
);

const mainEl = document.querySelector('main');
const newElement = document.createElement('p');
newElement.innerHTML = 'Dobar dan';
newElement.classList.add('nice');
mainEl.appendChild(newElement);
