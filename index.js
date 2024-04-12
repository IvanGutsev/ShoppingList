function addItem() {
    const container = document.querySelector(".items-container");
    const itemInp = document.querySelector("#itemInput");
    const itemDiv= document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    const p = document.createElement("p");
    p.textContent = itemInp.value;

    itemDiv.classList.add("item");

    itemDiv.appendChild(p);
    itemDiv.appendChild(deleteButton);
    container.appendChild(itemDiv);

    deleteButtonEvent(deleteButton, itemDiv);
}

function deleteButtonEvent(button, item){
    button.addEventListener('click', () => {
        item.remove();
    });
}
