"use strict";

// variale
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// fundtion xuất ra error
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

// hàm xuất thông tin ra html
const renderCountry = function (data, className = "") {
  const language = Object.entries(data.languages);
  const html = `
          <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} milion people</p>
              <p class="country__row"><span>🗣️</span>${language.map(
                (x, index) => language[index][1] + " "
              )}</p>
              <p class="country__row"><span>💰</span>${
                Object.entries(data.currencies)[0][1].name
              }</p>
              </div>
          </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

// hàm lấy vị trí hiện tại
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0], "neighbour");
    })
    .catch((err) => console.error(`Something went wrong ${err.message}`))
    .then((data) => console.log(data))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
