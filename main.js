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

let id = 0;
function createElement(text) {
  const itemRow = document.createElement("div");
  itemRow.setAttribute("class", "item__row");

  itemRow.innerHTML = `
  <div class="item" data-id=${id}>
    <span class="item__name">${text}</span>
       <button class="item__delete">
         <i class="fas fa-trash-alt" data-id=${id}></i>
       </button>
  </div>
  <div class="divider">
  </div>`;
  id++;
  return itemRow;
}

input.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
