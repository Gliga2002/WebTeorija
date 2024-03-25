class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle');
    this.radius = radius;
  }

  getDescription() {
    alert(` this is a ${this.getName()} with a radius of ${this.radius}`);
  }
}

const c = new Circle(5);
c.getDescription();
