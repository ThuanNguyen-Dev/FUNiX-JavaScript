"use strict";

// Declare variable
const petArr = JSON.parse(getFromStorage("pets"));
const breedArr = JSON.parse(getFromStorage("breed"));

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const typeInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const findBtn = document.getElementById("find-btn");
// functions
const renderBreed = function (type) {
  // tìm tất cả option của Breed Input
  const old_op = document.querySelectorAll("#input-breed>option");
  // duyệt qua mảng old_op để remove các phần tử trong mảng
  for (let i = 1; i < old_op.length; i++) {
    old_op[i].remove();
  }
  // nếu type === "Select Type" thì xuất ra tất cả type
  if (type === "Select Type") {
    for (let i = 0; i < breedArr.length; i++) {
      const option = document.createElement("option");
      option.innerHTML =
        breedArr[i].breed.charAt(0).toUpperCase() + breedArr[i].breed.slice(1);
      breedInput.appendChild(option);
    }
  }
  // ngược lại: thì xuất type theo type [Dog, Cat]
  else {
    for (let i = 0; i < breedArr.length; i++) {
      if (breedArr[i].type === type) {
        const option = document.createElement("option");
        option.innerHTML =
          breedArr[i].breed.charAt(0).toUpperCase() +
          breedArr[i].breed.slice(1);
        breedInput.appendChild(option);
      }
    }
  }
};

findBtn.addEventListener("click", function () {});

const findPet = function () {
  const id = idInput.value;
  const name = nameInput.value;
  const type = typeInput.value;
  const vaccinated = vaccinatedInput.checked;
  const dewormed = dewormedInput.checked;
  const sterilized = sterilizedInput.checked;
  // TODO: Xem xét lại
  if (typeInput.value === "Select Type") {
    type = "";
  } else {
    type = typeInput.value;
  }
  if (breedInput.value === "Select Breed") {
    const breed = "";
  } else {
    const breed = breedInput.value;
  }
  return petArr.filter(
    (arr) =>
      arr.id.match(`${id}.*`) &&
      arr.name.match(`${name}.*`) &&
      // BUG: không load được
      arr.type.match(`${type}.*`) &&
      arr.breed.match(`${breed}.*`)
  );
};

function init() {
  renderBreed("Select Type");
  typeInput.onchange = function () {
    renderBreed(typeInput.value);
  };
}

init();
