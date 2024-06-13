// what is array 

// const items = ["deepanshu","chirag","abhay","Insan","Rixwan"]
// items.push("Krishan")
// items.unshift("Rixwan")
// items.pop()
// items.shift()

// items.splice(0,0,"krishan")

// const result= items.slice(1,3)
// console.log(result)

// for(let i=0; i<items.length; i++){
//     console.log(items[i])
// }

// items.forEach((values)=>{
//   console.log(values)
// })

// items.map((value,index)=>{
//   console.log(value, index)
// })

// reduce method 

// const numbers = [12,34,23,56,10]
// const result =   numbers.reduce((crr, acc)=>{
//     return crr + acc 
// })

// console.log(result)


// filter method 


// const numbers = [12,34,23,56,10]

// const result = numbers.filter((num)=>{
//   return num%2===0
// })
// console.log(result)


// find method 

// const numbers = [12,34,23,56,10]
// const result = numbers.find((num)=>{
//   return num===34;
// })
// console.log(result)

// sort method 


// const numbers = [12,34,23,56,10]
// const result = numbers.sort((a,b)=>{
//   return a-b;
// })
// console.log(result)


// const ages = [3, 10, 18, 20];

// const result = ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }
// console.log(result)

// const ages = [3, 10, 18, 20];
// const result = ages.some((age)=>{
//     return age>=18;
// })
// console.log(result)

// let num = Math.sqrt(25)
// console.log(num)


// random

const number = Math.random()
console.log(number)


// const items = ["deepanshu","chirag","abhay","Insan","Rixwan"]
// // const items2 =  items.slice(0)
// const items2 = [...items]
// console.log(items)
// console.log(items2)

/// for in loop

// let arr = [10,20,30,40]

// for(let ar in arr){
//     console.log(arr[ar])
// }

// let arr = [10,20,30,40]

// for(let array of arr){
//     console.log(array)
// }

// let arr =[
//     ["John",30],
//     ["thomas",28],
//     ["Robert",22]
// ]

// console.log(arr[1][0])

let array1 = ["Thomas","Chad"]
// let item1 = array1[0]
// let item2 = array1[1]

const [item1, item2]= array1
console.log(item1)
console.log(item2)