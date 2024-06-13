const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber = 123.4000
console.log(otherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))


////------------------------ Maths -------------------------------------


// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.8))


// const values = [4,6,10,45,12]
// console.log(Math.min(...values))



// Math.random

// console.log(Math.floor(Math.random()*10+1))


const min = 10
const max = 20

// console.log(Math.floor(Math.random()*(min - max + 1))+min)



const names = ["Riya","Shewta","shizuka","Priya","Kirti"]

const randomIndex = Math.floor(Math.random() * names.length)

const yourName = "Shivam"

const result = "Congratulations" + " " + yourName +" " + "Your future Wife is " + names[randomIndex]
console.log(result)










