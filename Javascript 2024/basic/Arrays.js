// const animes = ["Idaten Jump","Dorameon","Pokemon",]
// const result = animes.slice(0,2)
// console.log(result)


// const fruits = ["mango","banana","apple","grapes"]
// fruits.splice(1,0,"black berry","orange")
// console.log(fruits)


/// find the sum of given numbers 
// 23,45,67,89

// const numbers =[23,45,67,89]

// const Sum = numbers.reduce((acc,dcc)=>{
//     return acc + dcc 
// })

// console.log(Sum)


// const numbers =[12,34,56,87,65,21,-89,12]

// const result =numbers.filter((num)=>{
//   return num<0
// })

// console.log(result)


// const numbers = [15,16,10,34,12]

// const result = numbers.some((num)=>{
//   return num>6 
// })

// console.log(result)




// console.log(numbers.includes(12))
// console.log(numbers.join())


// Splice & Slice

// const numbers = [4,6,7,8,10]

// const newNum =  numbers.slice(1,4)
// console.log(newNum)

// const newNum2 = numbers.splice(1,4,[3,5,6,7])
// console.log(newNum2)
// console.log(numbers)


const dig1 = [1]
const dig2 = [2]
const dig3 = [3]
const dig4 = [4]
const dig5 = [5]

const totalDig = dig1 + dig2 + dig3 + dig4 + dig5

const otpIndex = Math.floor(Math.random()* totalDig)

const YourOtp = `Your Otp Generated Successfully ${otpIndex}`
console.log(YourOtp)



// build strong password generator 
const alphabets = ['a','b','c','d','e']
const digits = [1,2,3,4,5]
const symbols = ['!','@','#','$','%']

const passLength = 3
let yourPassword = 'Your Password is : '
for(let i=0; i<passLength; i++){
   const passwordIndex = Math.floor(Math.random()*digits.length)
   const password2Index = Math.floor(Math.random()*symbols.length)
   const password3Index = Math.floor(Math.random()*alphabets.length)
   yourPassword += digits[passwordIndex] + symbols[password2Index] + alphabets[password3Index]
}

console.log(yourPassword)


// const names = ['Deepanshu','Shivam','Abhay']

// const [ firstName, secondName, thirdName ] = names

// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)


// cloning Array 

const animes = ['Pokemon','Doraemon','Kiterastu']
const cartoons = ['Chhota Bheem','Motu Patlu','Shiva']

//  animes.push(cartoons)
// const newArray = cartoons.concat(animes)
// console.log(newArray)


const newArray = [...animes, ...cartoons]
console.log(newArray[0])


const anotherArray = [1,2,3,4,[6,7,8],[9,20,11,12]]
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray)


console.log(Array.isArray("Deepanshu"))
console.log(Array.from("Deepanshu"))

const score = 100;
const score2 = 200;
const score3 = 350;

console.log(Array.of(score,score2,score3))









