//#region 3.1

//* 3.1.1
/**
 * ? Chuyển đổi kiểu và ép kiểu 
'9' - '5'; = 4

'19' - '13' + '17'; = 617

'19' - '13' + 17; = 23

'123' < 57; = false

5 + 6 + '4' + 9 - 4 - 2; = 1143
*/

//* 3.1.2
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
//#endregion 3.1

//#region 3.2
/**
 * ? Toán tử bằng: == với ===
 *1. Khai báo biến 'numNeighbours' dựa trên prompt input sau: prompt('How many neighbor countries does your country have?'). Bạn có thể tìm hiểu cách sử dụng hàm prompt để lấy dữ liệu từ người dùng ở link sau.
 *2. Nếu chỉ có 1 neighbour, hãy in ra console 'Only 1 border!' (sử dụng ==).
 *3. Sử dụng else-if block để ghi 'More than 1 border' trong trường hợp 'numNeighbours' lớn hơn 1.
 *4. Sử dụng else block để ghi 'No borders' (block này sẽ được thực thi khi 'numNeighbours' là 0 hoặc bất kỳ giá trị nào khác).
 *5. Kiểm tra code với các giá trị 'numNeighbours' khác nhau, gồm 1 và 0.
 *6. Thay == thành ===, và kiểm tra lại code với các giá trị 'numNeighbours' tương tự. Điều gì sẽ xảy ra khi numNeighbours = 1? Tại sao lại như vậy?
 ** Đáp án: Khi numNeighbours = 1 thì sẽ không thực hiện được câu lệnh else-if vì nó không thỏa mãn điều kiện. Vì vậy, câu lệnh else sẽ được thực hiện.
 ** '1' === 1 => false
 *7. Cuối cùng, chuyển đổi 'numNeighbours' thành một số, và xem điều gì sẽ xảy ra khi bạn nhập vào 1.
 *8. Hãy nêu lý do chúng ta nên sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này.
 ** Đáp án: Chúng ta nên sử dụng toán tử === vì nó sẽ so sánh cả giá trị và kiểu dữ liệu của biến. Còn toán tử == chỉ so sánh giá trị của biến.
 */

/** 
 * ! vô hiệu hóa code trước đó để prompt không xuất hiện 
let numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);
 
 * ? thay toán tử == thành ===
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

//#endregion 3.2

//#region 3.3
/**
 * ? Toán tử logic
 *1. Hãy vô hiệu hóa code trước đó để prompt không xuất hiện.
 *2. Giả sử Sarah đang tìm một quốc gia mới để sinh sống. Cô ấy muốn ở một đất nước sử dụng ngôn ngữ Tiếng Anh, dân số ít hơn 50 triệu người và không phải đảo quốc.
 *3. Bạn cần tạo các biến tương ứng với ngôn ngữ, dân số, có phải đảo quôcs không. Giá trị các biến này sẽ được nhập bằng hàm prompt.
 *4. Hãy viết một câu lệnh if giúp Sarah tìm kiếm quốc gia phù hợp. Bạn cần viết điều kiện đánh giá  tất cả các tiêu chí của Sarah. Hãy dành thời gian thực hiện điều này.
 *5. Nếu đất nước nhập vào phù hợp, in ra string như sau: 'You should live in Portugal :)'. Ngược lại, hãy in 'Portugal does not meet your criteria :('
 *6. Có thể đất nước mà bạn nhập không đáp ứng toàn bộ tiêu chí. Hãy quay trở lại và thay đổi tạm thời một số biến để điều kiện trở nên đúng (trừ khi bạn sống ở Canada).
 */

let flag = false;
while (flag == false) {
  let language = prompt("What language do you speak?", "English");
  let population = Number(
    prompt("What is the population of your country?", 49000000)
  );
  let isIsland = prompt("Is your country an island?");
  if (language === "English" && population < 50000000 && !isIsland) {
    console.log("You should live in Portugal :)");
    flag = true;
  } else {
    console.log("Portugal does not meet your criteria :(");
  }
}
//#endregion 3.3

//#region 3.4
/**
 * ? Câu lệnh switch
 * Sử dụng câu lệnh switch để ghi string sau cho 'language' dựa trên giá trị của 'language':
 */
let language = prompt("What language do you speak?", "Mandarin");
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
//#endregion 3.4

//#region 3.5
/**
 * ? Toán tử điều kiện (ba ngôi)
 * Nếu dân số của đất nước lớn hơn 33 triệu người, sử dụng toán tử ba ngôi để in string sau ra console: 'Portugal's population is above average'.
Ngược lại, hãy in 'Portugal's population is below average'. Lưu ý giữa hai câu này chỉ có một từ thay đổi!
 */

let population = Number(
  prompt("What is the population of your country?", 33000000)
);
population > 33000000
  ? console.log("Portugal's population is above average")
  : console.log("Portugal's population is below average");
//#endregion 3.5

//#region 3.6
/**
 * ? 3.6.1. Đội nào chiến thắng
 * Có hai đội thể dục dụng cụ là Dolphins và Koalas. Họ thi đấu với nhau 3 lần. Đội nào có điểm trung bình cao nhất sẽ chiến thắng!
 * ? Nhiệm vụ của bạn:
 * Tính điểm cho từng đội, sử dụng dữ liệu kiểm tra bên dưới
 * So sánh điểm trung bình của hai đội để tìm ra đội chiến thắng và in ra console. Đừng quên là có thể hòa, nên hãy kiểm tra điều đó (hòa tức là họ có điểm trung bình giống nhau),
 * nếu hòa bạn hãy in ra màn hình "Both win the trophy!".
 * Bonus 1: Chúng ta được thêm một quy tắc như sau: số điểm tối thiểu là 100 điểm . Theo quy tắc này, một đội sẽ giành chiến thắng chỉ khi họ có điểm trung bình cao hơn đội còn lại,
 * và đồng thời có ít nhất 100 điểm. Gợi ý: Sử dụng toán tử logic để kiểm tra điểm số tối thiểu cũng như các else-if block!
 * Bonus 2: Điểm số tối thiểu cũng áp dụng cho việc hòa trận! Trường hợp hòa nhau chỉ xảy ra khi cả hai đội có số điểm giống nhau mà phải lớn hơn hoặc bằng 100 điểm.
 * Nếu không thì không có đội nào giành chiến thắng cả.
 * * Dữ liệu 1: Dolphins được 96, 108 và 89 điểm. Koalas được 88, 91 và 110 điểm
 * * Dữ liệu Bonus 1: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 123 điểm
 * * Dữ liệu Bonus 2: Dolphins được 97, 112 và 101 điểm. Koalas được 109, 95 và 106 điểm
 */

const scoreDolphins = (96 + 108 + 89) / 3; // = 97.666
const scoreKoalas = (88 + 91 + 110) / 3; // = 96.333
if (scoreDolphins == scoreKoalas) {
  console.log("Both win the trophy!");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy!");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy!");
}
// Bonus 1
const scoreDolphins1 = (97 + 112 + 101) / 3; // = 103.333
const scoreKoalas1 = (109 + 95 + 123) / 3; // = 109
if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log("Dolphins win the trophy!");
} else if (scoreDolphins1 < scoreKoalas1 && scoreKoalas1 >= 100) {
  console.log("Koalas win the trophy!");
}
// Bonus 2
const scoreDolphins2 = (97 + 112 + 101) / 3; // = 103.333
const scoreKoalas2 = (109 + 95 + 106) / 3; // = 103.333
if (
  scoreDolphins2 == scoreKoalas2 &&
  scoreKoalas2 >= 100 &&
  scoreDolphins2 >= 100
) {
  console.log("Both win the trophy!");
} else if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log("Dolphins win the trophy!");
} else if (scoreDolphins2 < scoreKoalas2 && scoreKoalas2 >= 100) {
  console.log("Koalas win the trophy!");
}

/**
 * ? 3.6.2 Tip
 * Steven muốn tạo một tip calculator (công cụ tính tiền tip) đơn giản cho những khi anh ta muốn ăn ở nhà hàng.
 * Ở đất nước của anh ta, người ta thường tip 15% nếu giá trị hóa đơn nằm trong khoảng 50-300. Với những giá trị khác, tip thường là 20%.
 * ? Nhiệm vụ của bạn:
 * Tính tip dựa theo giá trị hóa đơn. Tạo biến 'tip' cho điều này. Không dùng câu lệnh if/else
 * (Để dễ hơn, bạn có thể bắt đầu với lệnh if/else sau đó chuyển đổi nó thành toán tử ba ngôi!)
 * In string ra console có chứa giá trị hóa đơn (bill), tiền tip và giá trị cuối cùng (bill + tip).
 * Ví dụ: “The bill was 275, the tip was 41.25, and the total value 316.25”
 * * Dữ liệu kiểm tra:
 * Dữ liệu 1: Kiểm tra giá trị bill 275, 40 và 430
 * !Gợi ý:
 * Tính 20% của giá trị, nhân nó với 20/100 = 0.2
 * Giá trị X nằm trong khoảng 50 và 300, nếu nó >= 50 && <= 300
 */

const bill = [275, 40, 430];
for (let i = 0; i < bill.length; i++) {
  const tip = bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
  const total = tip + bill[i];
  console.log(
    `The bill was ${bill[i]}, the tip was ${tip}, and the total value ${total}`
  );
}
//#endregion 3.6
