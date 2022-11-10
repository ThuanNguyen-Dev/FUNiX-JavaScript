// Sử dụng ES6 class
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
    this.accelerate();
    this.brake();
    this.speedUS;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  accelerate() {
    console.log(`${this.make} đi với tốc độ ${(this.speed += 10)} km/h`);
  }
  brake() {
    console.log(`${this.make} đi với tốc độ ${(this.speed -= 5)} km/h`);
  }
}

const bmw = new Car("BMW", 120);
console.log(bmw.speedUS);

const mercedes = new Car("Mercedes", 95);
console.log(mercedes.speedUS);

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} đi với tốc độ ${this.speed} km/h, còn ${this.charge} % pin`
    );
  }
  brake() {
    this.speed -= 20;
    this.charge--;
    console.log(
      `${this.make} đi với tốc độ ${this.speed} km/h, còn ${this.charge} % pin`
    );
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
}

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
console.log(tesla);
