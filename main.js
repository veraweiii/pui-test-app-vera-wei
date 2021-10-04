function addNewList() {
    alert('hello world!');
}

function addListItem() {
    // console.log("hello world!")
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("new-list-item");
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}


