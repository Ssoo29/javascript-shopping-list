const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const newItemRow = createElement(text);
  items.appendChild(newItemRow);
  newItemRow.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", () => {
  onAdd();
});

function createElement(text) {
  const newItemRow = document.createElement("div");
  newItemRow.setAttribute("class", "item__row");

  const newItem = document.createElement("div");
  newItem.setAttribute("class", "item");

  const newSpan = document.createElement("span");
  newSpan.textContent = text;

  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.setAttribute("class", "item__delete");
  newDeleteBtn.addEventListener('click', () => {
    items.removeChild(newItemRow);
  })

  const newI = document.createElement("i");
  newI.setAttribute("class", "fas fa-trash-alt");
  newDeleteBtn.appendChild(newI);

  const newDivider = document.createElement("div");
  newDivider.setAttribute("class", "divider");

  newItem.appendChild(newSpan);
  newItem.appendChild(newDeleteBtn);
  newItemRow.appendChild(newItem);
  newItemRow.appendChild(newDivider);

  return newItemRow;
}

input.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    onAdd();
  }
});
