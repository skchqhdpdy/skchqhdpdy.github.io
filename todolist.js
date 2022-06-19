const todo = document.querySelector("#inputtodolist");
const getTodo = document.querySelector("#inputtodolist input");

function todoColorChange() {
    switch (localStorage.getItem("background Image Number")) {
        case "0":
            return "#C0C0C0";
            break;
    
        case "1":
            return "yellow";
            break;
    
        case "2":
            return "aqua";   
            break;
    
        case "3":
            return "#ff7f00";  
            break;
                
        default:
            return "violet"   
            break;
    }
}

function todolistBtnClick(event) {
    event.preventDefault();
    const todolist = getTodo.value;
    getTodo.value = "";

    if (localStorage.getItem("listcount") === null || localStorage.getItem("listcount") === undefined) {
        localStorage.setItem("listcount", 0)
    }

    const count = parseInt(localStorage.getItem("listcount"));
    localStorage.setItem("listcount", count + 1)
    localStorage.setItem(`todolist${count + 1}`, todolist);

    const addDiv = document.createElement("div");
    const addTodolist = document.createElement("h1");

    addTodolist.innerText = `${count + 1}.` + localStorage.getItem(`todolist${count + 1}`)
    
    addDiv.style.color = todoColorChange();
    
    addTodolist.classList.add("showtodolist")
    addDiv.appendChild(addTodolist);
    document.body.appendChild(addDiv);

    
}

todo.addEventListener("submit", todolistBtnClick);