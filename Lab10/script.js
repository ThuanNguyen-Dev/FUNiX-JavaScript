'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let arrhighscore = [];

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayText = function (e, text) {
  document.querySelector(`.${e}`).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉🎉 Correct Number!';
    displayMessage('🎉🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score = Number(document.querySelector('.score').textContent);
    if (score > highscore) {
      console.log('score', score);
      highscore = score;
      arrhighscore.push(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   // when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       if (guess > 20) {
  //         document.querySelector('.message').textContent =
  //           '⛔️ Number is too high!';
  //       } else {
  //         document.querySelector('.message').textContent = '📈 Too high!';
  //       }
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //     }

  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       if (guess < 1) {
  //         document.querySelector('.message').textContent =
  //           '⛔️ Number is too low!';
  //       } else {
  //         document.querySelector('.message').textContent = '📉 Too low!';
  //       }
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You lost the game!';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.score').textContent = score;
  displayText('score', score);
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
