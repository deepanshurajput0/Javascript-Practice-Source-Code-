// // 
// const button_bg = document.querySelectorAll('.my-buttons button')
// console.log(button_bg)

// button_bg.forEach(button =>{
//     button.addEventListener("click",(e)=>{
//         e.target.style.backgroundColor = "yellow"; 
//         e.target.style.color = "#333"; 
//     })
// })

const mainBtn = document.querySelectorAll(".container button");
const body = document.body;


function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor; 
}

mainBtn.addEventListener("click",()=>{
    const randomColor = randomColorGenerator(); 
    body.style.backgroundColor = randomColor; 
})