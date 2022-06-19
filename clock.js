const clock = document.querySelector("#clock h1")



function changeClock() {

    const day = new Date();

    const nowHour = String(day.getHours()).padStart(2, "0");
    const nowMinute = String(day.getMinutes()).padStart(2, "0");
    const nowSecond = String(day.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${nowHour}:${nowMinute}:${nowSecond}`;
}

changeClock();
setInterval(() => {
    changeClock();
}, 1000);