let randomNumber =  parseInt(Math.random()*100 + 1)
let userInput = document.querySelector('#guess')
let submit = document.querySelector('#submit')
let guessSlot = document.querySelector('.guesses')
let remainig = document.querySelector('.lastResult')
let loworHigh = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.details')
let prevGuess = []
let numGuess = 1
let playgame = true 
const p = document.createElement('p')
if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = userInput.value
        validate(guess)
     })
     
}
function validate(guess){
    if(isNaN(guess)){
      alert('Please Enter Valid Number')
    }else if(guess<0){
      alert('Please Enter Value greater than 0')
    }else if(guess>100){
       alert('Please Enter Value Smaller than 100')
    }else{
        prevGuess.push(guess)
      if(numGuess>10){
        displayGuess(guess)
        displayMessage(`Game Over Random Number was ${randomNumber}`)
        endGame()
      }else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('Congratulations, You Won')
  }else if(guess<randomNumber){
    displayMessage('Your Number is too small')
  }else if(guess>randomNumber){
    displayMessage('Your Number is too Big')
  }
}

function displayGuess(guess){
   userInput.value = ''
   guessSlot.innerHTML += `${guess} ,`
   numGuess++
   remainig.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
   loworHigh.innerHTML = `<h4>${message}</h4>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame" > Start New Game</h2>` 
  startOver.appendChild(p)
  playgame = false
  newGame()
}
function newGame(){
   const newButtonGame = document.getElementById('newGame')
   newButtonGame.addEventListener('click',()=>{
    randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML =''
    remainig.innerHTML = `${11- numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playgame = true
   })
}