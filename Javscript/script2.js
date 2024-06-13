/////////////------------- Introduction ---------------///////////////////////

// datatypes

// String - "Abhay"
// Numbers - 1234,6.0
// Booleans - true / false
// null - null
// undefined - not defined

/// variables - are containers which store our values
// var
// const
//let 

// var name ="abhay"
// console.log(name)

// var number =12
// console.log(number)

// var boolean = true
// console.log(boolean)

// let value;
// console.log(value)


// var a = 10
// var b = 5
// console.log(a+b)


// var a = 56
// var b = 23
// console.log(b/a)

// var a = 34
// var b = 23
// var sum = a+b
// console.log(sum)


// if else

// voting 

// const number = 12;

// if(number%2===0){
//     console.log(`${number} This is Even`)
// }else{
//     console.log(`This is Odd Number`)
// }


/// loop 

// for(let i=0; i<=100; i++){
//     console.log(i)
// }

/// print table of 2

// let number = 2
// for(let i=0; i<=10; i++){
//     console.log(number*i)
// }

/// print sum of numbers 

// let numbers = [1,2,3,4,5,6,7]

// const sum= numbers.reduce((crr, acc)=>{
//    return crr + acc
// })

// console.log(sum)

/// arrays 


// array are iterables 
// it stores multiples values 
// const data = [2, "deepanshu", true, 23.40]
// for(let i=0; i<data.length; i++){
//     console.log(data[i])
// }

// console.log(data)
/// array methods

// data.push("Shivam")  for adding elements 
// data.pop()
// data.splice(2)
// shift
// unshift

// data.shift()
// console.log(data)


// Objects

// const myInfo={
//     name:"Abhay Kumar",
//     profession:"Software Developer",
//     Age:"19",
//     Status:"Unmarried"
// }

// myInfo.DOB = "Unknown"

// console.log(myInfo)


/// function 

// a set of statements that performs a task or calculates a value

// function Sum(a,b){
//     console.log(a+b)
// }

// Sum(4,6)

// function Sum(a,b){
//     console.log(a+b)
// }

// Sum(10,45)
// Sum(5,7)
// Sum(10,7)

/// Iterate arrays with loop

// loop

// for(let i=0; i<myData.length; i++){
//     console.log(myData[i])
// }

// array Methods

/// for each 

// myData.forEach((data, index)=>{
//  console.log(data, index)
// })


/// map 

let myData = [1,2,3,4]

// myData.map((data, index)=>{
//  console.log(data, index)
// })

/// reduce

// const result = myData.reduce((TotalValue, currentValue)=>{
//   return TotalValue + currentValue
// })
 
// // total           crrr           output
// //  0                1               1
// //  1                2               3
// //  3                3                6
// //  6                 4                10 
// console.log(result)



/// check the number is prime or not 

const number = 8
let isPrime = true
if(number>1){
    for(let i=2; i<number; i++){
      if(number%i ==0){
        isPrime= false
        break;    
      }
      if(isPrime == true){
        console.log(`This is Prime Number`)
      }else{
        console.log(`This is Not Prime Number`)
      }
    }
}

