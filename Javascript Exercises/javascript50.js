//// javascript 50 questions 

console.log('hello world')


// write a program to add 2 numbers


function Add(a,b){
    return a + b
}

const result = Add(2,3)
console.log(result)


// find area of rectangle 


function findArea(length, breadth){
   return length*breadth
}

const area = findArea(12,3)
console.log(area)

// takes string and returns reverse 

function Reverse(data){
    return data.split('').reverse()
}

const result2 = Reverse('Deepanshu')
console.log(result2)

// function that check even or odd 

function isEven(number){
     if(number%2===0){
       return 'This is Even Number'
     }else{
        return 'This is Odd Number'
     }
}

console.log(isEven(13))


// function that check the number is leap year or not 

let isLeapYear =(year)=>{
  if(year % 4 ===0 && year % 100 !==0 || year % 400 ===0){
    return true
  }else{
    return true
  }
}

console.log(isLeapYear(2000))



// find the sum of all elements in array 

const numbers = [20,30,40,10,8,10]
let sum = 0
for(let i=0; i<numbers.length; i++){
  sum+= numbers[i]    
}
console.log(sum)



const myCar ={
  car:"Lamborghini",
  model:"aventador",
  year:2018
}

myCar.engineStatus = "Engine Started"

console.log(myCar)

let para = document.querySelector('p')
para.innerHTML = 'Welcome to tech xverse'

let buttonparent = document.querySelector('.myButton')
let button = document.createElement("button")
button.textContent = 'click Me'
buttonparent.appendChild(button)

button.addEventListener('click',()=>{
  alert("clicked")
})