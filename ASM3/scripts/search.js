"use strict";

// variable
const pageSize = 10;
const API_KEY = "02d4424b0f544c63b1e8e9e563ef1993";

const queryInput = document.getElementById("input-query");
const searchBtn = document.getElementById("btn-submit");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const numPage = document.getElementById("page-num");
const news = document.querySelector("#news-container");
const total_Results = document.getElementById("totalResults");

// function

// xuất ra lỗi
const renderError = function (msg) {
  console.log(msg);
};

// làm trống bảng tin
const clearNews = function () {
  news.innerHTML = "";
};

/**
 * hàm lấy dữ liệu từ API
 * @param queryInput nhập dữ liệu cần tìm kiếm
 * @param page: Thứ tự của lần trả về dữ liệu
 * @param pageSize: Số lượng bài viết trả về khi gọi API.
 */
const getNews = async function (queryInput, page) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${queryInput}&pageSize=${pageSize}&page=${page}&apiKey=02d4424b0f544c63b1e8e9e563ef1993`
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

// hàm kiểm tra dữ liệu đầu vào
const validate = function () {
  if (queryInput.value === "") {
    alert("Please enter a search query");
    return false;
  }
  return true;
};

// hàm tính tổng số trang và ẩn/ tắt các nút chuyển trang
const totalPages = function (page, totalResults) {
  if (totalResults > 0) {
    total_Results.innerHTML = `<p>Approximately ${totalResults} results</p>`;
    // Phương thức Math.ceil() làm tròn một số đến số nguyên lớn nhất tiếp theo.
    const totalPages = Math.ceil(totalResults / pageSize);
    if (page === 1) {
      prevBtn.style.display = "none";
    }
    if (page === totalPages) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "none";
    }
    if (page > 1 && page < totalPages) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  } else {
    total_Results.innerHTML = `<p>keyword <b>${queryInput.value}</b> does not return results</p>`;
  }
};

// event handler.
// hàm xử lý khi click vào nút search
searchBtn.addEventListener("click", function () {
  if (!validate()) return;
  clearNews();
  getNews(queryInput.value, 1);
  numPage.textContent = 1;
});

// hàm xử lý khi click vào nút next
nextBtn.addEventListener("click", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  const page = pageNum + 1;
  clearNews();
  numPage.textContent = page;
  getNews(queryInput.value, page);
});

// hàm xử lý khi click vào nút prev
prevBtn.addEventListener("click", function () {
  const pageNum = Number(document.getElementById("page-num").textContent);
  const page = pageNum - 1;
  clearNews();
  numPage.textContent = page;
  getNews(queryInput.value, page);
});
