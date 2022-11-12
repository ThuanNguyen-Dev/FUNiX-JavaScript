"use strict";

// variable
const API_KEY = "02d4424b0f544c63b1e8e9e563ef1993";

const country = "us";
const pageSize = JSON.parse(getFromStorage("pageSize")) || 3;
const totalResults = 30;

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const news = document.querySelector("#news-container");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getNews = async function (page) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
    );
    if (!res.ok) throw new Error("Problem getting data");
    const data = await res.json();
    data.articles.map(function (article) {
      renderToHTML(article);
    });
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
  }
  return totalResults;
};

const renderToHTML = function (data) {
  const html = `
    <div class="card flex-row flex-wrap">
        <div class="card mb-3" style="">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${data.urlToImage}"
                        class="card-img"
                        alt="${data.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <a href="${data.url}"class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
  document
    .querySelector("#news-container")
    .insertAdjacentHTML("beforeend", html);
};

nextBtn.addEventListener("click", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  const page = pageNum + 1;
  news.innerHTML = "";
  prevBtn.style.display = "block";
  document.getElementById("page-num").textContent = page;
  getNews(page);
});

prevBtn.addEventListener("click", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  const page = pageNum - 1;
  news.innerHTML = "";
  document.getElementById("page-num").textContent = page;
  getNews(page);
  if (page === 1) {
    prevBtn.style.display = "none";
  }
});

window.addEventListener("load", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  if (pageNum === 1) {
    prevBtn.style.display = "none";
  }
  getNews(1);
});

// TODO: logic code, clean code, if totalResult btn netx is disable
