"use strict";

// variable
const currentUser = JSON.parse(getFromStorage("currentUser")) || [];
const settings =
  JSON.parse(getFromStorage(`${currentUser.username}-settings`)) || [];

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

// event listener
btnSubmit.addEventListener("click", function () {
  const settings = {
    pageSize: inputPageSize.value,
    category: inputCategory.value,
  };
  if (currentUser) {
    saveToStorage(`${currentUser.username}-settings`, JSON.stringify(settings));
    location.reload();
  }
});

// sự kiện chạy khi load trang
window.addEventListener("load", function () {
  inputPageSize.value = settings.pageSize || 5;
  inputCategory.value = settings.category || "General";
});
