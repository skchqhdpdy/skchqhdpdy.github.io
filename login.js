const getUserName = document.querySelector("#username input");
const form = document.querySelector("#username");
const sayHello = document.querySelector("#sayhello");

function helloColorChange() {
    switch (localStorage.getItem("background Image Number")) {
        case "0":
            sayHello.style.color = "#C0C0C0";
            break;
    
        case "1":
            sayHello.style.color = "yellow";
            break;
    
        case "2":
            sayHello.style.color = "aqua";   
            break;
    
        case "3":
            sayHello.style.color = "#ff7f00";  
            break;
                
        default:
            sayHello.style.color = "violet"   
            break;
    }
}

function btnClick(event) {
        event.preventDefault();
    
        const username = getUserName.value;
        getUserName.value = "";

        localStorage.setItem("username", username);
        form.classList.toggle("hiddne");

        sayHello.innerText = `Hello! ${username}!`;;
        helloColorChange();        
        sayHello.classList.toggle("hiddne");

        document.getElementById("inputtodolist").classList.toggle("hiddne")
}

if (localStorage.getItem("username") !== null) {
    form.classList.toggle("hiddne");
    sayHello.innerText = `Hello! ${localStorage.getItem("username")}!`;
    helloColorChange();
    sayHello.classList.toggle("hiddne");

    document.getElementById("inputtodolist").classList.toggle("hiddne");
}

form.addEventListener("submit", btnClick);