/// print the odd numbers less than 100

// for(let i=0; i<100; i++){
//     if(i%2 !==0){
//         console.log(i)
//     }
// }

// print the table of 7 
// const number = 7
// for(let i=0; i<=10; i++){
//     console.log(`${number} X ${i} = ${number*i}`)
// }

// Calculate the sum of numbers from 1 to 10

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const result = numbers.reduce((acc,curr)=>{
//  return acc + curr
// })
// console.log(result)

/// it checks number is  prime number or not  

let num = 8;
let isPrime = true
  if(num>1){
    for(let i=2; i<num; i++){
        if(num%i==0){
         isPrime=false;
         break;
        }
    if(isPrime==true){
        console.log("Its a Prime Number")
    }else{
        console.log("Not a prime number")
    }
    }
  }


// Calculate the sum of odd numbers greater than 10 and less than 30
// const oddNumbers = []
// for(let i=10; i<30; i++){
//     if(i%2 !==0){
//         console.log(i)
//         oddNumbers.push(i)
//     }
// }
// const result1 =  oddNumbers.reduce((acc, crr)=>{
//   return acc + crr
// })
// console.log(result1)


// let sum = 0;
// for(let i = 11; i <= 30; i += 2)
// {
//     sum += i;
// }

// console.log(sum);



// Create a function that will convert from Celsius to Fahrenheit

// function converter(value){
//   return  value*1.8 + 32
// }

// const result0 = converter(32)
// console.log(result0, "Fahrenheit" )


// 

// Calculate the sum of numbers in an array of numbers

// let arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]
// const result2 = arr.reduce((acc,crr)=>{
//   return acc + crr
// })
// console.log(result2)


// 11: Calculate the average of the numbers in an array of numbers


// let ar = [1, 3, 9, 15, 90]

// const result3= ar.reduce((acc, crr)=>{
//   return acc + crr
// })
// console.log(result3 / ar.length)


