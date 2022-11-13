"use strict";

// variables
const min_pass = 8;
const KEY = "USER_ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];
const currentUser = JSON.parse(getFromStorage("currentUser"));

const btnLogout = document.getElementById("btn-logout");
const content = document.getElementById("content");
const loginModal = document.getElementById("login-modal");

// event listener
window.addEventListener("load", () => {
  if (currentUser) {
    const html = `<p>Welcome ${currentUser.firstName}</p>`;
    btnLogout.insertAdjacentHTML("beforebegin", html);
    loginModal.style.display = "none";
  } else {
    btnLogout.style.display = "none";
  }

  // sự kiện chạy khi click vào nút logout
  btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    deleteStorage("currentUser");
    window.location.href = "../../ASM3/pages/login.html";
  });
});
