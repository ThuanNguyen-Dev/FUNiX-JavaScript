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

// hàm kiểm tra đã có user không. nếu không có truy cập trang register để đăng kí user
const loginUser = function () {
  const user = userArr.filter((user) => user.username == username.value);
  // kiểm tra nếu độ dài mảng user trả về là 0 thì hiển thị thông báo
  if (user.length === 0) {
    const isExecuted = confirm(
      "There is no user in the system. Please register first"
    );
    if (isExecuted) {
      window.location.href = "../pages/register.html";
    }
  }
  // nếu có user thì kiểm tra password
  else {
    if (user[0].password === password.value) {
      saveToStorage("currentUser", JSON.stringify(user[0]));
      window.location.href = "../pages/news.html";
    } else {
      alert("Wrong password");
    }
  }
};

// event listener
submitBtn.addEventListener("click", (e) => {
  if (!validate()) return;
  loginUser();
});
