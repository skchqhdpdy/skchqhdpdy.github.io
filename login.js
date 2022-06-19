const getUserName = document.querySelector("#username input");
const form = document.querySelector("#username")
const sayHello = document.querySelector("#sayhello")
form.style.placeholderColor = "yellow"

switch (localStorage.getItem("backgroud Image")) {
    case "win-10-dark.jpg":
        form.style.placeholderColor = "yellow"
        break;

    case "win-10-purple.jpg":
        getUserName.style.placeholderColor = "yellow"   
        break;

    case "win-10-red.jpg":
        getUserName.style.placeholderColor = "yellow"   
        break;

    case "win-10.jpg":
        getUserName.style.placeholderColor = "yellow"   
        break;
            
    default:
        getUserName.style.placeholderColor = "yellow" 
        break;
}

function btnClick(event) {
    event.preventDefault();
    const username = getUserName.value;
    getUserName.value = "";

    localStorage.setItem("username", username);
    form.classList.toggle("hiddne");

    sayHello.innerText = `Hello! ${username}!`;
    sayHello.classList.toggle("hiddne");

    document.getElementById("todolist").classList.toggle("hiddne")
}

form.addEventListener("submit", btnClick);