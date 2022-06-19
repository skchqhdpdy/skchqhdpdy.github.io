const bgImg=["win-10-dark.jpg", "win-10-purple.jpg", "win-10-red.jpg", "win-10.jpg", "win-xp.jpg"];

const bg = document.querySelector("body")
const randomNum = Math.round(Math.random() * 4);

bg.background = `./img/${bgImg[randomNum]}`;
bg.style.backgroundSize = "cover";
console.log(`Background Image = ${bgImg[randomNum]}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const clockColor = document.querySelector("#clock h1")

switch (bgImg[randomNum]) {
    case "win-10-dark.jpg":
        clockColor.style.color = "#C0C0C0";
        localStorage.setItem("backgroud Image", "win-10-dark.jpg");
        break;

    case "win-10-purple.jpg":
        clockColor.style.color = "yellow";
        localStorage.setItem("backgroud Image", "win-10-purple.jpg");     
        break;

    case "win-10-red.jpg":
        clockColor.style.color = "aqua";
        localStorage.setItem("backgroud Image", "win-10-red.jpg");     
        break;

    case "win-10.jpg":
        clockColor.style.color = "#ff7f00";
        localStorage.setItem("backgroud Image", "win-10.jpg");     
        break;
            
    default:
        clockColor.style.color = "violet"
        localStorage.setItem("backgroud Image", "win-xp.jpg");     
        break;
}