function max(a: number, b: number): number {
  return a > b ? a : b;
}

console.log(max(5, 7));

const niz: number[] = [2, 5, -9, 8, -1, 9, 7, -3];
const suma = niz
  .filter((x) => x > 0)
  .reduce((acc: number, x) => {
    acc += x;
    return acc;
  }, 0);
console.log(`Suma je ${suma}`);

enum Status {
  Ok = 1,
  Warning = 2,
  Error = 3,
}

const networkStatus: Status = Status.Ok;
console.log(`Status = ${networkStatus}`);
