const stepenovanje = function (stepen) {
  return function (x) {
    return Math.pow(x, stepen);
  };
};

// ovo je function curyling (zvanje funkcije iz vise delove i prosledjivanje parametara)
const naKvadrat = stepenovanje(2);
const naKub = stepenovanje(3);
console.log(naKvadrat(3));
console.log(naKub(3));

// IIFE (fje koje se odma izvrsavaju)
const stepenovanje2 = (function (stepen) {
  return function (x) {
    return Math.pow(x, stepen);
  };
})(2);

console.log(stepenovanje2(5));
