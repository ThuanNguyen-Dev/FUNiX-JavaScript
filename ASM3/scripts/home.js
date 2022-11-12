"use strict";

const min_pass = 8;
const KEY = "USER_ARRAY";
const userArr = JSON.parse(getFromStorage(KEY)) || [];

const btnLogout = document.getElementById("btn-logout");
const content = document.getElementById("content");
const loginModal = document.getElementById("login-modal");

const currentUser = JSON.parse(getFromStorage("currentUser"));

if (currentUser) {
  const html = `<p>Welcome ${currentUser.firstName}</p>`;
  btnLogout.insertAdjacentHTML("beforebegin", html);
  loginModal.style.display = "none";
} else {
  btnLogout.style.display = "none";
}

btnLogout.addEventListener("click", (e) => {
  e.preventDefault();
  deleteStorage("currentUser");
  window.location.href = "../../ASM3/pages/login.html";
});

// TODO: Chuyển trang cho các bài viết 80%
// TODO: (Nâng cao) Tìm kiếm bài viết theo từ khóa
