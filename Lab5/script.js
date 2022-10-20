"use strict";

//#region Lab 5
/**
 * ? Lab 5.1. Giới thiệu về Object
 * Tạo một object là 'myCountry' cho quốc gia bạn chọn, chứa các thuộc tính 'country', 'capital', 'language', 'population' and 'neighbours' (array như chúng ta đã thực hành trong bài trước).
 */

const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 99,
  neighbours: ["China", "Laos", "Cambodia"],
};

/**
 * ? Lab 5.2. Dấu chấm với dấu ngoặc
 * Sử dụng object từ bài tập trước, in string sau ra console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
 * Tăng dân số của đất nước thêm hai triệu người bằng cách sử dụng dấu chấm (object.population), và sau đó giảm đi hai triệu người bằng dấu ngoặc (object['population']) để truy cập vào các thuộc tính.
 */

const Finland = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 6,
  neighbours: ["Sweden", "Norway", "Russia"],
};
console.log(
  `${Finland.country} has ${Finland.population} million ${Finland.language}-speaking people, ${Finland.neighbours.length} neighbouring countries and a capital called ${Finland.capital}.`
);

/**
 * ? Lab 5.3. Phương thức Object  (15 phút)
 * Thêm một phương thức có tên là 'describe' vào object 'myCountry'.
 * Phương thức này sẽ in một string ra console với nội dung như sau: "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki" nhưng lần này sử dụng từ khóa 'this'.
 * Gọi phương thức 'describe'
 * Thêm phương thức 'checkIsland' vào object 'myCountry'.
 * Phương thức này sẽ thiết lập một thuộc tính mới trên object là 'isIsland'. 'isIsland' sẽ là giá trị true nếu không có nước láng giềng, ngược lại là false. Sử dụng toán tử điều kiện để đặt giá trị cho thuộc tính.
 */

const myCountry1 = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "Vietnamese",
  population: 99,
  neighbours: ["China", "Laos", "Cambodia"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  isIsland: function () {
    return this.neighbours.length === 0 ? true : false;
  },
};
console.log(myCountry1.describe(), myCountry1.isIsland());

/**
 * ? Lab 5.4. Vòng lặp For
 * Ở đất nước bạn có các cuộc bầu cử. Ở một thị trấn nhỏ, chỉ có 50 cử tri. Sử dụng vòng lặp for để mô phỏng 50 cử tri này, bằng cách in string sau ra console (cho các số từ 1 đến 50):
 * 'Voter number 1 is currently voting'.
 */

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
//#endregion Lab 5
