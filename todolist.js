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


document.querySelector("#inputtodolist button").style.color = todoColorChange();
document.querySelector("#inputtodolist").classList.add(`phcolor${parseInt(localStorage.getItem("background Image Number")) + 1}`)

function todolistBtnClick(event) {
    event.preventDefault();

    const cultsubstring = String(getTodo.value).substring(6)
    if (getTodo.value === `clear${cultsubstring}`) {
        alert(cultsubstring)

    }else if (getTodo.value === "logout" || getTodo.value === "로그아웃") {
        localStorage.removeItem("username")
        location.reload();
    }
    else if (true) {
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
        const removeBtn = document.createElement("button");


        addTodolist.innerText = `${count + 1}.` + localStorage.getItem(`todolist${count + 1}`)
        
        addDiv.style.color = todoColorChange();
        
        addTodolist.classList.add("showtodolist")
        addDiv.appendChild(addTodolist);
        document.body.appendChild(addDiv);
        
    }

}

if (localStorage.getItem("listcount") !== null) {

    for (let i = 1; i <= parseInt(localStorage.getItem("listcount")); i++) {
        if (localStorage.getItem("username") === null) {
            break;
        }

        const addDiv = document.createElement("div");
        const addTodolist = document.createElement("h1");

        addTodolist.innerText = `${i}.` + localStorage.getItem(`todolist${i}`)
        
        addDiv.style.color = todoColorChange();
        
        addTodolist.classList.add("showtodolist")
        addDiv.appendChild(addTodolist);
        document.body.appendChild(addDiv);
    }
}

todo.addEventListener("submit", todolistBtnClick);

function removeTodolist() {
    localStorage.clear();
    location.reload();
}
document.querySelector(".todolistclear").addEventListener("click", removeTodolist)