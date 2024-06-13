
const mainBtn = document.querySelectorAll(".container button");
const body = document.body;


function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor; 
}

addEventListener("click",()=>{
    const randomColor = randomColorGenerator(); 
    body.style.backgroundColor = randomColor; 
})