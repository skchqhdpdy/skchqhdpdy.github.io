const todo = document.querySelector("#inputtodolist");
const getTodo = document.querySelector("#inputtodolist input");

function todolistBtnClick(event) {
    event.preventDefault();
    const todolist = getTodo.value;
    getTodo.value = "";

    if (localStorage.getItem("listcount") === null || localStorage.getItem("listcount") === undefined) {
        localStorage.setItem("listcount", 0)
    }/////////////////////////
    const count = parseInt(localStorage.getItem("listcount"));
    localStorage.setItem("listcount", count + 1)

    localStorage.setItem(`todolist${localStorage.getItem("listcount")}`, todolist);

    const addDiv = document.createElement("div");
    const addTodolist = document.createElement("h1");
    addDiv.appendChild(addTodolist);
    document.body.appendChild(addDiv);

    
}

todo.addEventListener("submit", todolistBtnClick);