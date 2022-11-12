"use strict";

// variable
const settings = JSON.parse(getFromStorage("settings")) || "";

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function () {
  const settings = {
    pageSize: inputPageSize.value,
    category: inputCategory.value,
  };
  saveToStorage("settings", JSON.stringify(settings));
  location.reload();
});

window.addEventListener("load", function () {
  inputPageSize.value = settings.pageSize || 5;
  inputCategory.value = settings.category || "";
});
