"use strict";

//#region Lab 6

/**
 * ? Lab 6: Xử lý string
 * Cho một loạt các nhiệt độ tối đa đã được dự báo, nhiệt kế hiển thị một string với các nhiệt độ đã cho. Ví dụ: [17, 21, 23] sẽ in ra console "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."
 * * Nhiệm vụ của bạn:
 * Tạo hàm 'printForecast' lấy array 'arr' và in một string như trên ra console. Hãy thực hành với cả hai dữ liệu kiểm tra.
 * * Dữ liệu kiểm tra:
 * Dữ liệu 1: [17, 21, 23]
 * Dữ liệu 2: [12, 5, -5, 0, 4]
 */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(str);
};
printForecast(data1);
printForecast(data2);
//#endregion Lab 6
