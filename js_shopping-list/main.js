let inputFormDOM = document.querySelector("#inputForm");
inputFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const ITEM_TITLE = document.querySelector("#item-title");
    const COUNT = document.querySelector("#count");
    if(ITEM_TITLE.value && COUNT.value) {
        addItem(ITEM_TITLE.value, COUNT.value);
        ITEM_TITLE.value = "";
        COUNT.value = "";
    }
    else {
        alertDOM.innerHTML = alertFunction(
          "Error: ",
          "Missing Input",
          "danger");
    }
}

let shoppingListDOM = document.querySelector("#shoppingList");

const addItem = (itemName, count) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `<span class="align-middle">${itemName}</span>
    <span class="badge bg-primary rounded-pill align-middle">${count}</span>`;
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
    shoppingListDOM.append(liDOM)
}