"use strict";

// variable
const currentUser = JSON.parse(getFromStorage("currentUser"));
const KEY = "TASK_ARRAY";
const todoArr =
  JSON.parse(getFromStorage(`${currentUser.username}-${KEY}`)) || [];
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

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("ul#todo-list>li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // thêm sự kiện click vào nút x để xóa task
    const close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        const index = todoArr.findIndex(
          (item) => item.task === div.innerText.replace("\n×", "").trim()
        );
        todoArr.splice(index, 1);
        saveToStorage(
          `${currentUser.username}-${KEY}`,
          JSON.stringify(todoArr)
        );
        div.style.display = "none";
      };
    }
    // thêm sự kiện click vào task để đánh dấu hoàn thành
    const list = document.querySelectorAll("ul#todo-list>li");
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function (ev) {
        if (ev.target.tagName === "LI") {
          ev.target.classList.toggle("checked");
          const index = todoArr.findIndex(
            (item) =>
              item.task === ev.target.innerText.replace("\n×", "").trim()
          );
          todoArr[index].isDone = !todoArr[index].isDone;
          saveToStorage(
            `${currentUser.username}-${KEY}`,
            JSON.stringify(todoArr)
          );
        }
      });
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
  saveToStorage(`${currentUser.username}-${KEY}`, JSON.stringify(todoArr));
  renderTodoList();
  inputTask.value = "";
});

// sự kiện khi load trang
window.addEventListener("load", () => {
  renderTodoList();
});
