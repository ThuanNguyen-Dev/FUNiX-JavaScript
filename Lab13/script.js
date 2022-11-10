var Car = {
  make: "",
  speed: "",
  accelerate: function () {
    console.log(`${this.make} đi với tốc độ ${(this.speed += 10)} km/h`);
  },
  brake: function () {
    console.log(`${this.make} đi với tốc độ ${(this.speed -= 5)} km/h`);
  },
};

// *Dữ liệu car 1: 'BMW' đi với tốc độ 120 km/h
// *Dữ liệu car 2: 'Mercedes' đi với tốc độ 95km/h

var myCar = Object.create(Car);
myCar.make = "BMW";
myCar.speed = 120;
myCar.accelerate();
myCar.brake();

var myCar2 = Object.create(Car);
myCar2.make = "Mercedes";
myCar2.speed = 95;
myCar2.accelerate();
myCar2.brake();
