/* function colorChange() {
    switch (localStorage.getItem("background Image")) {
        case "win-10-dark.jpg":
            clockColor.style.color = "#C0C0C0";
            localStorage.setItem("background Image", "win-10-dark.jpg");
            sayHello.style.color = "#C0C0C0";
            break;
    
        case "win-10-purple.jpg":
            clockColor.style.color = "yellow";
            localStorage.setItem("background Image", "win-10-purple.jpg");     
            break;
    
        case "win-10-red.jpg":
            clockColor.style.color = "aqua";
            localStorage.setItem("background Image", "win-10-red.jpg");     
            break;
    
        case "win-10.jpg":
            clockColor.style.color = "#ff7f00";
            localStorage.setItem("background Image", "win-10.jpg");     
            break;
                
        default:
            clockColor.style.color = "violet"
            localStorage.setItem("background Image", "win-xp.jpg");     
            break;
    }
}
export default colorChange; */

const link = "https://aodd.moe/nomadcoders/바닐라%20js";
alert(`만약 github.io페이지에서 버튼 등 미완성 처럼 보이면 \n${link} \n이쪽으로 이동해주세요. 콘솔에 링크 남길예정`);
console.log(link);

const btn = document.querySelector("#x");

function btnClick() {
    alert("만들다가 귀찮기도 하고 시간도 없어서 X버튼은 때려침 XD");
}

btn.addEventListener("click", btnClick);