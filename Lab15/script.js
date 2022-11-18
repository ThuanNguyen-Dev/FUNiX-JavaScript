"use strict";

const image = document.querySelector(".images");

const createImage = async function (imgPath) {
  const img = document.createElement("img");
  img.src = imgPath;
  img.className = "image";
  return img;
};

let wait = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    image.append(img);
    await wait(2000);
    await wait(2);
    img.style.display = "none";
    img = await createImage("img/img-2.jpg");
    image.append(img);
    await wait(2000);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgEl = await Promise.all(imgs);
    imgEl.forEach((img) => image.append(img));
  } catch (err) {
    console.error(err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.png"]);
