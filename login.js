const getUserName = document.querySelector("#username input");
const form = document.querySelector("#username");
const sayHello = document.querySelector("#sayhello");

function helloColorChange() {
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
        
document.querySelector("#username button").style.color = helloColorChange();
document.querySelector("#username").classList.add(`phcolor${parseInt(localStorage.getItem("background Image Number")) + 1}`)

function btnClick(event) {
        event.preventDefault();
    
        const username = getUserName.value;
        getUserName.value = "";

        localStorage.setItem("username", username);
        form.classList.toggle("hiddne");

        sayHello.innerText = `Hello! ${username}!`;
        sayHello.style.color = helloColorChange();

        sayHello.classList.toggle("hiddne");

        document.getElementById("inputtodolist").classList.toggle("hiddne")

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
        
}

if (localStorage.getItem("username") !== null) {
    form.classList.toggle("hiddne");
    sayHello.innerText = `Hello! ${localStorage.getItem("username")}!`;
    sayHello.style.color = helloColorChange();

    sayHello.classList.toggle("hiddne");

    document.getElementById("inputtodolist").classList.toggle("hiddne");
}

form.addEventListener("submit", btnClick);