function addItem(){
    const container = document.querySelector(".items-container");
    const input = document.querySelector(".item-input");
    const newItem = document.createElement("div");
    const text = document.createElement("li");
    text.textContent = input.value;
    const button = document.createElement("button");
    button.textContent = "delete";

    newItem.appendChild(text);
    newItem.appendChild(button);
    container.appendChild(newItem);

    // styles
    newItem.classList.add("item");

    // delete node when the button is pressed
    button.addEventListener("click", function() {
        newItem.remove();
    });
}
