const getUserName = document.querySelector("#username input");
const form = document.querySelector("#username")

function btnClick(event) {
    event.preventDefault();
    const username = getUserName.value;
    alert(username);
}

form.addEventListener("click", btnClick)