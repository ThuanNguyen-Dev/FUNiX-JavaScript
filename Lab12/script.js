"use strict";

// Lab 12.1: Phân loại thú cưng
// data 1
const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
// data 2
const dogJulia1 = [9, 16, 6, 8, 3];
const dogKate1 = [10, 5, 6, 1, 4];

// function
const checkDogs = function (dog_Julia, dog_Kate) {
  const dogsJulia = dog_Julia.slice(1, -1);
  const dogs = dogsJulia.concat(dog_Kate);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs(dogJulia, dogKate);
checkDogs(dogJulia1, dogKate1);

// Lab 12.2: Chuyển đổi tuổi thú cưng

// data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// function
const humanAge = [];
const calcAverageHumanAge = function (arrs) {
  arrs.forEach(function (arr, i) {
    if (arr <= 2) {
      humanAge[i] = 2 * arr;
    } else if (arr > 2) {
      humanAge[i] = 16 + arr * 4;
    }
  });
  const humanAgeFilter = humanAge.filter(function (age) {
    return age >= 18;
  });
  const humanAgeAverage = humanAgeFilter.reduce(function (acc, age, i, arr) {
    return acc + age / arr.length;
  }, 0);
  return humanAgeAverage;
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

// Lab 12.3: Sử dụng Arrow Function

const calcAverageHumanAge1 = (arrs) =>
  arrs
    .map((arr) => (arr <= 2 ? 2 * arr : 16 + arr * 4))
    .filter((arr) => arr >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge1(data1));
console.log(calcAverageHumanAge1(data2));
