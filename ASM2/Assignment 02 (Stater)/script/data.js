"use strict";

// Declare variable
const petArr = JSON.parse(getFromStorage("pets"));
const importBtn = document.getElementById("import-btn");
importBtn.addEventListener("click", importData);

function importData() {
  const data = JSON.parse(getFromStorage("pets"));
  const file = document.getElementById("file").files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const text = e.target.result;
    const newData = JSON.parse(text);
    for (let i = 0; i < newData.length; i++) {
      data.push(newData[i]);
    }
    localStorage.setItem("pets", JSON.stringify(data));
  };
  reader.readAsText(file);
}

function exportData() {
  var blob = new Blob(JSON.stringify(petArr), {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "Pet_list.txt");
}

exportData();
