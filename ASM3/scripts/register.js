"use strict";

// variable
const min_pass = 8;
const KEY = "USER_ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];

const submitBtn = document.getElementById("btn-submit");
const firstName = document.getElementById("input-firstname");
const lastName = document.getElementById("input-lastname");
const username = document.getElementById("input-username");
const password = document.getElementById("input-password");
const passwordConfirm = document.getElementById("input-password-confirm");

// function
// hàm kiểm tra dữ liệu nhập vào
const validate = function () {
  if (firstName.value === "") {
    alert("Please enter your first name");
    return false;
  }
  if (lastName.value === "") {
    alert("Please enter your last name");
    return false;
  }
  if (username.value === "") {
    alert("Please enter your username");
    return false;
  }

  for (let user in userArr) {
    if (parseUser(userArr[user]).username === username.value) {
      alert("Username is the same as an existing username!");
      return false;
    }
  }

  if (password.value === "") {
    alert("Please enter your password");
    return false;
  }
  if (password.value.length < min_pass) {
    alert(`Password must be at least ${min_pass} characters`);
    return false;
  }
  if (passwordConfirm.value === "") {
    alert("Please confirm your password");
    return false;
  }

  if (passwordConfirm.value.length < 8) {
    alert(`Password confirm must be at least ${min_pass} characters
        `);
    return false;
  }
  if (password.value !== passwordConfirm.value) {
    alert("Passwords do not match");
    return false;
  }

  return true;
};

// hàm in user
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  );
  return user;
}

// event listener
submitBtn.addEventListener("click", (e) => {
  if (!validate()) return;
  e.preventDefault();
  const user = new User(
    firstName.value,
    lastName.value,
    username.value,
    password.value
  );
  userArr.push(user);
  saveToStorage(KEY, JSON.stringify(userArr));
  alert("Register successfully!");
  window.location.href = "login.html";
});
