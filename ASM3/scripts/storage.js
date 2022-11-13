"use strict";

// function
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key) {
  return localStorage.getItem(key);
}

function deleteStorage(key) {
  localStorage.removeItem(key);
}
