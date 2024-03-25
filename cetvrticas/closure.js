function spoljna() {
  const poruka = 'Pozdrav iz spoljne';

  return function unutrasnja(additionMessage) {
    console.log(poruka + ', ' + additionMessage);
  };
}

const fja = spoljna(); // pokazivac na unutrasnju funkciju
fja('nova poruka');

function counter() {
  let counter = 0;

  function increase() {
    counter++;
    console.log(counter);
  }

  function decrease() {
    counter--;
    console.log(counter);
  }

  return {
    increase,
    decrease,
  };
}

const counterObj = counter();
const counterObj2 = counter(); // zaseban scope
counterObj.increase();
counterObj.increase();
counterObj.increase();
counterObj.decrease();

counterObj2.increase();
