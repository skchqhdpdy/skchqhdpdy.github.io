const getUserName = document.querySelector("#username input");
const form = document.querySelector("#username");
const sayHello = document.querySelector("#sayhello");
form.style.placeholderColor = "yellow";

function loginBtnClick(event) {
    event.preventDefault();
    const username = getUserName.value;
    getUserName.value = "";

    localStorage.setItem("username", username);
    form.classList.toggle("hiddne");

    sayHello.innerText = `Hello! ${username}!`;
    sayHello.classList.toggle("hiddne");

    document.getElementById("todolist").classList.toggle("hiddne")
}

form.addEventListener("submit", loginBtnClick);