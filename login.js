const getUserName = document.querySelector("#username input");
const form = document.querySelector("#username");
const sayHello = document.querySelector("#sayhello");

function btnClick(event) {
        event.preventDefault();
    
        const username = getUserName.value;
        getUserName.value = "";

        localStorage.setItem("username", username);
        form.classList.toggle("hiddne");

        sayHello.innerText = `Hello! ${username}!`;
        sayHello.classList.toggle("hiddne");

        document.getElementById("inputtodolist").classList.toggle("hiddne")
}

if (localStorage.getItem("username") !== null) {
    form.classList.toggle("hiddne");
    sayHello.innerText = `Hello! ${localStorage.getItem("username")}!`;
    sayHello.classList.toggle("hiddne");

    document.getElementById("inputtodolist").classList.toggle("hiddne");
}

form.addEventListener("submit", btnClick);