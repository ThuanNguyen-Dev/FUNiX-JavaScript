"use strict";

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key) {
  return localStorage.getItem(key);
}

function checkNull(key) {
  if (getFromStorage(key) === null) {
    return true;
  }
  return false;
}
// set localStorage breed
if (checkNull("breed")) {
  localStorage.setItem(
    "breed",
    JSON.stringify([
      { breed: "Tiny Poodle", type: "Dog" },
      { breed: "Poodle", type: "Dog" },
      { breed: "British Longhair", type: "Cat" },
      { breed: "Munchkin", type: "Cat" },
    ])
  );
}
// set Local Storage index
if (checkNull("pets")) {
  localStorage.setItem(
    "pets",
    JSON.stringify([
      {
        id: "P1",
        name: "1",
        age: 1,
        type: "Cat",
        weigth: "5",
        length: "50",
        color: "#000000",
        breed: "British Longhair",
        vaccinated: true,
        dewormed: true,
        sterilized: true,
        BMI: "?",
        date: "10/28/2022",
      },
      {
        id: "P2",
        name: "2",
        age: 2,
        type: "Dog",
        weigth: "3",
        length: "40",
        color: "#6f2f2f",
        breed: "Tiny Poodle",
        vaccinated: true,
        dewormed: true,
        sterilized: false,
        BMI: "?",
        date: "10/28/2022",
      },
      {
        id: "P3",
        name: "3",
        age: 3,
        type: "Dog",
        weigth: "3",
        length: "30",
        color: "#000000",
        breed: "Poodle",
        vaccinated: false,
        dewormed: true,
        sterilized: true,
        BMI: "?",
        date: "10/28/2022",
      },
    ])
  );
}

// Toggle class active when click on navbar
const sidebarTitleEl = document.getElementById("sidebar-title");
const sidebarEl = document.getElementById("sidebar");
sidebarTitleEl.addEventListener("click", function () {
  sidebarEl.classList.toggle("active");
});
