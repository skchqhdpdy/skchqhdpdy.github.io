const bgImg=["win-10-dark.jpg", "win-10-purple.jpg", "win-10-red.jpg", "win-10.jpg", "win-xp.jpg"];

const bg = document.querySelector("body")
const randomNum = Math.round(Math.random() * 4);

bg.classList.add(`body${randomNum}`)

console.log(`Background Image = ${bgImg[randomNum]}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const clockColor = document.querySelector("#clock h1")

function bgChange() {
    switch (bgImg[randomNum]) {
        case "win-10-dark.jpg":
            clockColor.style.color = "#C0C0C0";
            localStorage.setItem("background Image", "win-10-dark.jpg");
            localStorage.setItem("background Image Number", randomNum);
            break;
    
        case "win-10-purple.jpg":
            clockColor.style.color = "yellow";
            localStorage.setItem("background Image", "win-10-purple.jpg");
            localStorage.setItem("background Image Number", randomNum);     
            break;
    
        case "win-10-red.jpg":
            clockColor.style.color = "aqua";
            localStorage.setItem("background Image", "win-10-red.jpg");
            localStorage.setItem("background Image Number", randomNum);     
            break;
    
        case "win-10.jpg":
            clockColor.style.color = "#ff7f00";
            localStorage.setItem("background Image", "win-10.jpg");
            localStorage.setItem("background Image Number", randomNum);     
            break;
                
        default:
            clockColor.style.color = "violet"
            localStorage.setItem("background Image", "win-xp.jpg");
            localStorage.setItem("background Image Number", randomNum);     
            break;
    }
}
bgChange();
