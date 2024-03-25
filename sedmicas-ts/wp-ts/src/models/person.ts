export interface Person {
  id: string;
  name: string;
  age: number;
}

export interface Student extends Person {
  prosekOcena: number;
}


type Evro = number;

export interface Radnik extends Person {
  prosekPlata: Evro;
}
