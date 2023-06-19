"use strict";

const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoTime = document.querySelector(
  ".form-todo input[type='datetime-local']"
);
const todoList = document.querySelector(".todo-list");
var current = new Date();

var sound = new Audio(
  "https://freesound.org/data/previews/316/316847_4939433-lq.mp3"
);

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const inputTime = todoTime.value;

  if (newTodoText) {
    const newLi = document.createElement("li");
    const liInnerHtml = `<span>${newTodoText}</span>
<div class="todo-btns">
<button class="todo-btn alarm">${inputTime}</button>
  <button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button>
</div>`;

    newLi.innerHTML = liInnerHtml;
    todoList.append(newLi);

    todoInput.value = "";
  } else {
    alert("Add todo...");
  }
});

todoList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const removeTodo = e.target.parentNode.parentNode;
    removeTodo.remove();
  }
});

function setAlarmTime(value) {
  let alarmTime = value;

  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      setTimeout(function play() {
        sound.play();
      }, timeout);
    } else {
      alert("Time you have entered is passed. Please select time in future.");
    }
  }
}
