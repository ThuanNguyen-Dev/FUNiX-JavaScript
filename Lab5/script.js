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

/**
 * ? Lab 5.5. Lặp trong array, break và continue
 * Hãy lấy lại array 'populations' từ bài lab trước.
 * Sử dụng vòng lặp for để tạo array 'percentages2' chứa phần trăm dân số thế giới cho 4 giá trị population. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
 * Xác nhận rằng 'percentages2' chứa chính xác các giá trị trong array 'percentages' mà chúng ta đã tạo theo cách thủ công ở lab trước, để xem giải pháp này tốt hơn như thế nào.
 */
const populations = [99, 125, 1441, 51];
const percentages2 = [];
const percentageOfWorld1 = (population) => (population / 7900) * 100;
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

/**
 * ? Lab 5.6. Looping Backwards and Loops in Loops(Vòng lặp ngược và Vòng lặp trong vòng lặp)
 * Lưu trữ array của những array này vào biến 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
 * Hiển thị các quốc gia láng giềng vào màn hình console, không phải toàn bộ array. Ví dụ 'Neighbour: Canada' cho từng quốc gia.
 * Bạn sẽ cần một vòng lặp bên trong vòng lặp cho điều này. Điều này thực sự hơi phức tạp, vì vậy đừng lo lắng nếu nó quá khó đối với bạn! Bạn sẽ giải quyết được vấn đề này.
 */

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

/**
 * ? 5.7. Vòng lặp While
 * Với đề bài tương tự Lab 5.5 Lặp trong array, break và continue, nhưng lần này hãy sử dựng vòng lặp while (gọi array 'percentages3').
 * Bạn thích giải pháp nào hơn cho nhiệm vụ này: vòng lặp for hay vòng lặp while?
 */

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);

/**
 * ? Lab 5.8: Bài toán tổng hợp #4
 */
/**
 * ? Lab 5.8.1. So sánh chỉ số IBM (phần 3)
 * * Nhiệm vụ của bạn:
 * Hãy quay lại ví dụ so sánh chỉ số BMI của Mark và John! Lần này, hãy dùng object để triển khai các phép tính! Nhớ rằng: BMI = mass/[(height)^2)] = mass/(height*height) (mass tính bằng kg và height tính bằng mét)
 * Với mỗi người (Mark Miller và John Smith), hãy tạo một object có các thuộc tính như full name, mass, and height
 * Tạo phương thức 'calcBMI' ở mỗi object để tính BMI (phương thức như nhau ở cả hai object). Lưu giá trị BMI vào một thuộc tính và trả về từ phương thức.
 * In ra console người có BMI cao hơn cùng với tên đầy đủ và BMI tương ứng. Ví dụ: "John's BMI (28.3) is higher than Mark's (23.9)!"
 * * Dữ liệu
 * Marks nặng 78 kg và cao 1m69. John nặng 92kg và cao 1m95.
 */

const Marks = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
if (Marks.calcBMI() > John.calcBMI()) {
  console.log(
    `${Marks.fullName}'s BMI (${Marks.bmi}) is higher than ${John.fullName}'s (${John.bmi})!`
  );
} else if (Marks.bmi < John.bmi) {
  console.log(
    `${John.fullName}'s BMI (${John.bmi}) is higher than ${Marks.fullName}'s (${Marks.bmi})!`
  );
}

/**
 * ? Lab 5.8.2. Cải thiện Tip calculator
 * Hãy cải thiện thêm tip calculator của Steven, lần này sử dụng các vòng lặp!
 * * Nhiệm vụ của bạn:
 * Tạo array 'bills' chứa tất cả 10 giá trị hóa đơn kiểm tra.
 * Tạo các array rỗng cho 'tips' và 'totals'.
 * Sử dụng hàm 'calcTip' mà chúng ta đã viết trước đó (không cần lặp lại) để tính các giá trị tips và totals (hóa đơn + tiền boa) cho mỗi giá trị bill trong bills array.
 * Sử dụng vòng lặp for để thực hiện 10 phép tính!.
 * *Dữ liệu kiểm tra:
 * 22, 295, 176, 440, 37, 105, 10, 1100, 86 và 52
 * * Gợi ý: Gọi ‘calcTip‘ trong vòng lặp và dùng phương thức push để thêm giá trị cho các array tips và totals.
 * * Bonus: Viết hàm 'calcAverage' nhận array 'arr' làm đối số. Hàm này tính trung bình tất cả các số đã cho trong array.
 * * Đây là một thử thách khó (chúng ta chưa từng thực hiện điều này trước đây)! Dưới đây là hướng dẫn thực hiện:
 * Trước tiên, bạn cần cộng tất cả các giá trị trong array. Để thực hiện phép cộng, tạo biến 'sum' bắt đầu từ 0.
 * Sau đó lặp qua array, sử dụng vòng lặp for. Ở mỗi lần lặp, cộng giá trị hiện tại vào biến 'sum'. Như vậy, ở cuối vòng lặp, bạn sẽ cộng được tất cả các giá trị với nhau.
 * Để tính trung bình, chia tổng mà bạn vừa tính trước đó cho độ dài của array (vì đó là số phần tử).
 * Gọi hàm với array 'totals'.
 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calctips = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  const tip = calctips(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log("Bills:" + bills + ", TIPS:" + tips + ", TOTAL:" + totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
//#endregion Lab 5
