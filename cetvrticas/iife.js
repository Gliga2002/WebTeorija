// enkapsulacija (Module Pattern)
// const counter = (function (counterValue) {
//   let counter = counterValue;

//   function increase() {
//     counter++;
//     console.log(counter);
//   }

//   function decrease() {
//     counter--;
//     console.log(counter);
//   }

//   return {
//     increase,
//     decrease,
//   };
// })(10);

// counter.increase();
// counter.increase();
// counter.increase();
// counter.decrease();

// --------------------------------------------------------

const makeCounter = (function () {
  return function (counterValue) {
    let counter = counterValue;

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
  };
})();

const counter2 = makeCounter(3);

counter2.increase();
counter2.increase();
counter2.increase();
counter2.decrease();

// --------------------------------------------------------

// 2 nacin gdefja vraca IIFE
// const makeCounter = function (start) {
//   return (function () {
//     let counter = start;

//     function increase() {
//       counter++;
//       console.log(counter);
//     }

//     function decrease() {
//       counter--;
//       console.log(counter);
//     }

//     return {
//       increase,
//       decrease,
//     };
//   })(start);
// };

// const counter2 = makeCounter(3);

// counter2.increase();
// counter2.increase();
// counter2.increase();
// counter2.decrease();
