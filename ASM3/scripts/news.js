"use strict";

// variable
const API_KEY = "02d4424b0f544c63b1e8e9e563ef1993";
const country = "us";
const currentUser = JSON.parse(getFromStorage("currentUser")) || [];
const settings =
  JSON.parse(getFromStorage(`${currentUser.username}-settings`)) || "";
const pageSize = settings.pageSize || 5;

const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const news = document.querySelector("#news-container");

// function
// xuất lỗi ra console.log
const renderError = function (msg) {
  console.log(msg);
};

// làm trống bàn tin
const clearNews = function () {
  news.innerHTML = "";
};

// hàm lấy category từ setting
const rederCategory = function () {
  const category = settings.category || "";
  if (category === "General") {
    return category.replace("General", "");
  }
  return category;
};

/**
 * hàm lấy dữ liệu từ API
 * @param country: Mã code của đất nước mà bạn muốn lấy tin tức.
 * @param category: Danh mục của tin tức.
 * @param pageSize: Số lượng bài viết trả về khi gọi API.
 * @param page: Thứ tự của lần trả về dữ liệu
 * @param API_KEY: Khóa để xác thực, đây là tham số bắt buộc để bạn có thể sử dụng được API.
 */
const getNews = async function (page) {
  try {
    const category = rederCategory();
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`
    );
    if (!res.ok) throw new Error("Problem getting data");
    const data = await res.json();
    // sử dụng array.map để load dữ liệu từ API ra html
    data.articles.map(function (article) {
      renderToHTML(article);
    });
    const totalResults = data.totalResults;
    totalPages(page, totalResults);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
  }
};

// hàm xuất dữ liệu ra HTML
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

// hàm tính tổng số trang và ẩn/ tắt các nút chuyển trang
const totalPages = function (page, totalResults) {
  const totalPages = Math.ceil(totalResults / pageSize);
  if (page === 1) {
    prevBtn.style.display = "none";
  }
  if (page === totalPages) {
    nextBtn.style.display = "none";
  }
  if (page > 1 && page < totalPages) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
};

// event listener
// sự kiện chạy khi click vào nút next
nextBtn.addEventListener("click", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  const page = pageNum + 1;
  clearNews();
  document.getElementById("page-num").textContent = page;
  getNews(page);
});

// sự kiện chạy khi click vào nút pre
prevBtn.addEventListener("click", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  const page = pageNum - 1;
  clearNews();
  document.getElementById("page-num").textContent = page;
  getNews(page);
});

// sự kiện chạy khi load trang
window.addEventListener("load", function () {
  getNews(1);
});
