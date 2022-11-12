"use strict";

// variable
const KEY = "TASK_ARRAY";
const todoArr = JSON.parse(getFromStorage(KEY)) || [];
const currentUser = JSON.parse(getFromStorage("currentUser"));

const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

// function
btnAdd.addEventListener("click", (e) => {
  if (!validate()) return;
  e.preventDefault();
  const newTask = new Task(inputTask.value, currentUser.username, false);
  todoArr.push(newTask);
  saveToStorage(KEY, JSON.stringify(todoArr));
  renderTodoList();
});

const renderTodoList = function () {
  todoList.innerHTML = "";
  for (let task in todoArr) {
    if (todoArr[task].owner === currentUser.username) {
      const html = `
        <li class="${todoArr[task].isDone ? "checked" : ""}">
            ${todoArr[task].task}
            <span class="close">×</span>
        </li>
        `;
      todoList.innerHTML += html;
    }

    const close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        const li = this.parentElement;
        li.style.display = "none";
        todoArr.splice(i, 1);
        saveToStorage(KEY, JSON.stringify(todoArr));
        renderTodoList();
      };
    }

    const list = document.querySelectorAll("#todo-list>li");
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        todoArr[i].isDone = true;
        saveToStorage(KEY, JSON.stringify(todoArr));
        renderTodoList();
      };
    }
  }
};

const validate = function () {
  if (inputTask.value === "") {
    alert("Please enter your task");
    return false;
  }

  for (let task in todoArr) {
    if (todoArr[task].task === inputTask.value) {
      alert("Task is the same as an existing task!");
      return false;
    }
  }
  return true;
};

window.addEventListener("load", () => {
  renderTodoList();
});
