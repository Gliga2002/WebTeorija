import { Person } from './person';

// generic je izveden iz Person
export class Community<T extends Person> {
  // isto je i Array<T>
  private member: T[];

  constructor() {
    this.member = [];
  }

  add(newMember: T) {
    this.member.push(newMember);
  }

  getAverageAge() {
    const sum = this.member.reduce((acc, cur: T) => (acc += cur.age), 0);
    return sum / this.member.length;
  }
}
