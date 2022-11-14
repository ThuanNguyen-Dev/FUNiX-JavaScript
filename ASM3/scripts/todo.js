"use strict";

// variable
const KEY = "TASK_ARRAY";
const todoArr = JSON.parse(getFromStorage(KEY)) || [];
const currentUser = JSON.parse(getFromStorage("currentUser"));

const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

// function
// hàm xuất task ra html
const renderTodoList = function () {
  todoList.innerHTML = "";
  if (!currentUser) {
    alert("Please login to use this feature");
    window.location.href = "../pages/login.html";
    return;
  }
  // duyệt các phần tử trong mảng todoArr và xuất ra html
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

    // thêm sự kiện click vào nút x để xóa task
    const close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        todoArr.splice(i, 1);
        saveToStorage(KEY, JSON.stringify(todoArr));
        renderTodoList();
      };
    }

    // thêm sự kiện click vào task để đánh dấu hoàn thành
    const list = document.querySelectorAll("#todo-list>li");
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        todoArr[i].isDone = !todoArr[i].isDone;
        saveToStorage(KEY, JSON.stringify(todoArr));
        renderTodoList();
      };
    }
  }
};

// hàm kiểm tra dự liệu đầu vào
const validate = function () {
  if (inputTask.value === "") {
    alert("Please enter your task");
    return false;
  }

  // kiểm tra task đã tồn tại chưa
  for (let task in todoArr) {
    if (todoArr[task].task === inputTask.value) {
      alert("Task is the same as an existing task!");
      return false;
    }
  }
  return true;
};

// event listener
// sự kiện chạy khi click vào nút add
btnAdd.addEventListener("click", (e) => {
  if (!validate()) return;
  e.preventDefault();
  const newTask = new Task(inputTask.value, currentUser.username, false);
  todoArr.push(newTask);
  saveToStorage(KEY, JSON.stringify(todoArr));
  renderTodoList();
  inputTask.value = "";
});

// sự kiện khi load trang
window.addEventListener("load", () => {
  renderTodoList();
});
