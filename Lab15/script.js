"use strict";

const image = document.querySelector(".images");

const createImage = function (imgPath) {
  const img = document.createElement("img");
  img.src = imgPath;
  img.className = "image";
  return img;
};

const img1 = createImage("img/img-1.jpg");
const img2 = createImage("img/img-2.jpg");
const img3 = createImage("img/img-3.png");

const images = [img1, img2, img3];

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr);
    console.log(imgs);
    imgs.forEach((img) => image.append(img));
  } catch (err) {
    console.error(err);
  }
};

loadAll(images);
