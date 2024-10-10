let todoArr = [];

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

function renderTodos() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  todoArr.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

function addTodo(event) {
  event.preventDefault();

  const newTodo = todoInput.value.trim();

  if (newTodo !== "") {
    todoArr.push(newTodo);
    todoInput.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todoArr.splice(index, 1);
  renderTodos();
}

todoForm.addEventListener("submit", addTodo);

renderTodos();
