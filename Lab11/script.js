"use strict";

const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),
};

const registerNewAnswer = function () {
  const answer = Number(
    prompt(`${poll.question} \n ${poll.options.join("\n")}
    ('Write option number')`)
  );
  if (isNaN(answer) || answer < 0 || answer > 3) {
    alert("Câu trả lời không hợp lệ");
  } else {
    poll.numberOfVotes[answer]++;
    displayResults();
    displayResults("array");
  }
};

const displayResults = function (type = "string") {
  if (type === "string") {
    console.log(`Poll results are ` + poll.numberOfVotes);
  } else if (type === "array") {
    console.log(poll.numberOfVotes);
  }
};
