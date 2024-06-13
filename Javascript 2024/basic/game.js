const chances = ['stone','paper','scissors']
let chanceIndex = Math.floor(Math.random()*chances.length)
const player1 = chances[chanceIndex]
console.log(player1)
const player2 = 'stone'
if(player1 ==='stone' && player2 ==='paper'){
    console.log('Congratulations! You won')
}else if(player1 ==='paper' && player2 ==='scissors'){
   console.log('Congratulations! You won')
}else if(player1 ==='scissors' && player2 ==='stone'){
    console.log('Congratulations! You won')
}else{
    console.log('You lose Try again')
}








