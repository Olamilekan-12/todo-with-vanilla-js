const input = document.getElementById("input");
const addButton = document.getElementById("btn");

addButton.addEventListener("click", addTodo);

let todoArray = [];

function addTodo() {
  const inputValue = input.value;
  const todoListContainer = document.createElement("div");
  const fistP = document.createElement("p");
  const secondP = document.createElement("p");
  const firstSpan = document.createElement("span");
  const secondSpan = document.createElement("span");
  secondP.appendChild(firstSpan);
  secondP.appendChild(secondSpan);
  firstSpan.innerHTML = "Edit";
  secondSpan.innerHTML = "Delete";
  fistP.innerHTML = inputValue;
  todoListContainer.setAttribute("class", "todo__content__container");
  secondP.setAttribute("class", "edit__delete");
  todoListContainer.appendChild(fistP);
  todoListContainer.appendChild(secondP);
  const mainContainer = document.querySelector(".todo__list__container");
  todoArray.push(todoListContainer);
  todoArray.map((item) => mainContainer.append(item));
}
