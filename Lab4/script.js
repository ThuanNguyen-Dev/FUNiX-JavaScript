"use strict";

//#region Lab 4.1
/**
 * ? Hàm
 * 1. Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'.
 * Dựa vào input này, hàm trả về string với định dạng như sau: 'Finland has 6 million people and its capital city is Helsinki'.
 * 2. Gọi hàm này 3 lần với dữ liệu đầu vào cho 3 nước khác nhau. Lưu các giá trị trả về ở 3 biến khác nhau, và in chúng ra console.
 */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Vietnam", 100, "Hanoi"));
console.log(describeCountry("Japan", 100, "Tokyo"));
console.log(describeCountry("China", 100, "Beijing"));
//#endregion Lab 4.1

//#region Lab 4.2
/**
 * ? Khai báo hàm với biểu thức hàm
 * 1. Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population' và trả về phần trăm dân số thế giới theo dân số đã cho.
 * Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.
 * 2. Để tính phần trăm, chia giá trị 'population' đã biết cho 7900 rồi nhân với 100.
 * 3. Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.
 * 4. Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld2' và cũng gọi nó với 3 dân số theo quốc gia (có thể có cùng số dân).
 */

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441)); // China: 1.449.564.186 (Nguồn: https://danso.org/trung-quoc/)
console.log(percentageOfWorld1(99)); // Vietnam: 99.176.137 (Nguồn: https://danso.org/viet-nam/)
console.log(percentageOfWorld1(125)); // Japan: 125.434.288 (Nguồn: https://danso.org/nhat-ban/)
console.log(percentageOfWorld1(51)); // Korea: 51.334.110 (Nguồn: https://danso.org/han-quoc/)

console.log("4");
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(99));
console.log(percentageOfWorld2(125));
console.log(percentageOfWorld2(51));
//#endregion Lab 4.2

//#region Lab 4.3
/**
 * ? Arrow function: tạo một hàm mũi tên là 'percentageOfWorld3'.
 */
console.log("Arrow function");
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(99));
console.log(percentageOfWorld3(125));
console.log(percentageOfWorld3(51));
//#endregion Lab 4.3

//#region Lab 4.4
/**
 * ? Hàm gọi hàm
 * 1. Tạo một hàm là 'describePopulation'. Sử dụng kiểu hàm mà bạn muốn nhất. Hàm này nhận hai đối số là 'country' và 'population', và 
trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
 * 2. Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.
 * 3. Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ.
 */

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`; // Sử dụng hàm đã tạo ở Lab 4.2

console.log(describePopulation("Vietnam", 99));
console.log(describePopulation("Japan", 125));
console.log(describePopulation("China", 1441));
//#endregion Lab 4.4

//#region Lab 4.5
/**
 * ? Giới thiệu về Array
 * 1. Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Bạn có thể sử dụng các giá trị đã dùng trước đó. Lưu array này vào một biến là 'populations'.
 * 2. In ra console xem liệu array có 4 phần tử hay không (true hoặc false).
 * 3. Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm.
 */

const populations = [99, 125, 1441, 51];
console.log(populations.length === 4);
const percentages = [99, 125, 1441, 51].map(percentageOfWorld1);
console.log(percentages);
//#endregion Lab 4.5

//#region Lab 4.6
/**
 * ? Các phép toán cơ bản với array
 * 1. Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.
 * 2. Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. Vậy hãy thêm nó vào cuối array 'neighbours'.
 * 3. Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.
 * 4. Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.
 * 5. Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours', 
rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.
 */

const neighbours = ["Lao", "China", "Campuchia"];
neighbours.push("Utopia"); // Thêm phần tử vào cuối array
console.log(neighbours);
neighbours.pop(); // xóa phần tử cuối array
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  // kiểm tra xem có phần tử nào trong array có giá trị là 'Germany' không
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Lao")] = "Republic of Lao"; // thay đổi phần tử trong array
console.log(neighbours);
//#endregion Lab 4.6

//#region Lab 4.7
/**
 * ? Bài toán tổng hợp
 */

//#region Lab 4.7.1
/**
 * ? 4.7.1. Đội nào chiến thắng?
 * Quay trở lại với hai đội thể dục dụng cụ: Dolphins và Koalas! Có một quy tắc mới cho môn thể dục này, có cơ chế khác hẳn.
 * Mỗi đội thi đấu 3 lần, sau đó tính trung bình 3 lượt điểm số (điểm trung bình mỗi đội).
 * Một đội sẽ giành chiến thắng chỉ khi có số điểm trung bình ít nhất là gấp đôi so với điểm của đội còn lại.
 * Nếu không, sẽ không có đội nào thắng cả!
 * ? Nhiệm vụ của bạn:
 * Tạo hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số.
 * Sử dụng hàm để tính trung bình của cả hai đội.
 * Tạo hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số ('avgDolphins' và 'avgKoalas'), sau đó in đội thắng ra console cùng với số điểm giành chiến thắng theo luật trên. 
Ví dụ: "Koalas win (30 vs. 13)".
 * Dùng hàm 'checkWinner' để xác định đội chiến thắng cho cả Dữ liệu 1 và Dữ liệu 2.
 * Lần này hãy bỏ qua việc hòa.
 * * Dữ liệu 1: Dolphins có điểm số 44, 23 và 71. Koalas có điểm số 65, 54 và 49.
 * * Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
 */

const calcAverage = (a, b, c) => (a + b + c) / 3;
// *test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
};
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
//#endregion Lab 4.7.1

//#region Lab 4.7.2
/**
 * ? 4.7.2. Xây dựng Tip calculator
 * Steve vẫn đang xây dựng tip calculator, sử dụng quy tắc tương tự như trước: Tip 15% hóa đơn nếu giá trị hóa đơn trong khoảng 50-300, và với giá trị khác thì tip 20%.
 * ? Nhiệm vụ của bạn:
 * Viết hàm 'calcTip' nhận giá trị hóa đơn bất kỳ làm đầu vào và trả về tiền tip tương ứng, tính toán theo các quy tắc ở trên
 * (bạn có thể xem lại code từ thử thách tip calculator đầu tiên nếu cần). Sử dụng loại hàm mà bạn thích nhất. Kiểm tra hàm sử dụng giá trị hóa đơn là 100.
 * Giờ hãy dùng array. Hãy tạo array 'bills' có chứa dữ liệu kiểm tra bên dưới.
 * Tạo array 'tips' có chứa giá trị tiền tip cho từng hóa đơn, tính từ hàm mà bạn đã tạo trước đó.
 * Bonus: Tạo array 'total' có chứa tổng giá trị, tức là bill+tip.
 * * Dữ liệu kiểm tra: 125, 555 và 44.
 */
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// *test 1
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; // bill + tip
// *test 2
console.log(bills, tips, totals);
//#endregion Lab 4.7.2
//#endregion Lab 4.7
