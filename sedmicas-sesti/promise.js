// Promystification
function postaviTimeout(time) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
      // kao da sam ovu cb u then stavio ovde
    }, time);
  });

  return promise;
}

// postaviTimeout(3000).then(() => console.log('IZVRSENA'));

// Creating promise
function betOnNumber(targetNumber) {
  // async logika ovde
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const number = Math.ceil(Math.random() * 10);
      if (number > targetNumber) {
        resolve(number);
      } else {
        reject(`You lose, ${number} je manji od ${targetNumber}`);
      }
    }, 1000);
  });
}

// Consuming promise
// isto ima cb funkciju samo resava pyramid of DOM (na strukturan nacin resava)
function doBetting() {
  betOnNumber(4)
    .then((number) => {
      console.log(`Win ${number}`);
      return betOnNumber(3);
    })
    .then((number2) => {
      console.log(`Win II ${number2}`);
      return betOnNumber(2);
    })
    .then((number3) => {
      console.log(`Win III ${number3}`);
    })
    .catch((greska) => {
      console.log(greska);
    });
}

async function doBetting2() {
  try {
    const n1 = await betOnNumber(4);
    console.log(n1);
    const n2 = await betOnNumber(4);
    console.log(n2);
    const n3 = await betOnNumber(4);
    console.log(n3);
    console.log('kraj');
  } catch (err) {
    console.error(err);
  }
}

// doBetting2();

function betOnNumber3() {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const number = Math.ceil(Math.random() * 10);
      resolve(number);
    }, 3000);
  });
}

function betOnNumber4() {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const number = Math.ceil(Math.random() * 10);
      resolve(number);
    }, 1000);
  });
}

function betOnNumber5() {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      const number = Math.ceil(Math.random() * 10);
      resolve(number);
    }, 10000);
  });
}

Promise.all([betOnNumber3(), betOnNumber4(), betOnNumber5()]).then((array) => {
  console.log(array);
});
