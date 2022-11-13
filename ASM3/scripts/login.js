"use strict";

// variable
const min_pass = 8;
const KEY = "USER_ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];

const submitBtn = document.getElementById("btn-submit");
const username = document.getElementById("input-username");
const password = document.getElementById("input-password");

// function
const validate = function () {
  if (username.value === "") {
    alert("Please enter your username");
    return false;
  }

  if (password.value === "") {
    alert("Please enter your password");
    return false;
  }
  if (password.value.length < min_pass) {
    alert(`Password must be at least ${min_pass} characters`);
    return false;
  }

  return true;
};

// event listener
submitBtn.addEventListener("click", (e) => {
  if (!validate()) return;
  e.preventDefault();
  // duyệt các phần tử trong mảng userArr
  for (let user in userArr) {
    // nếu username và password nhập vào trùng với username và password trong mảng userArr
    if (
      userArr[user].username === username.value &&
      userArr[user].password === password.value
    ) {
      const curent_user = {
        firstName: userArr[user].firstName,
        lastName: userArr[user].lastName,
        username: userArr[user].username,
        password: userArr[user].password,
      };
      console.log(curent_user);
      saveToStorage("currentUser", JSON.stringify(curent_user)); // lưu user xuống local storage với tên "currentUser"
      window.location.href = "../index.html";
    }
  }
});
