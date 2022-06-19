const todo = document.querySelector("#todolist");


function todolistBtnClick(event) {
    event.preventDefault();

}

todo.addEventListener("submit", todolistBtnClick)