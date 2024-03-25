function createFunctionArray() {
  let a = 4;

  const funcArray = [];
  for (let i = 0; i < 5; i++) {
    funcArray[i] = function () {
      a++;
      //console.log(i);
      return a;
    };
  }
  return funcArray;
}
// close over promenljive a, a ne njene vrednosti
const funcs = createFunctionArray();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[0]());
console.log(funcs[4]());

function createFunctionArray2() {
  let i;
  // ako hoces da se resis da console.log(5), mora let da deklarises u for petlji i bice local scope

  const funcArray = [];
  for (i = 0; i < 5; i++) {
    funcArray[i] = function () {
      console.log(i);
    };
  }
  return funcArray;
}
// close over promenljive i, a ne njene vrednosti
const func = createFunctionArray2();
func[0]();
func[1]();
func[0]();
func[4]();
