// reference type data types 

// what is arrays 
// ans - ordered collection of elements 

// let fruits = ["mango","apple","banana","grapes"]
// // for(let i=0; i<fruits.length; i++){
// //     console.log(fruits[i].toLocaleUpperCase())
// // }

// // console.log(fruits[2])
// console.log(Array.isArray(fruits))

// // let numbers = [12,34,6,57,6]
// // newNum = numbers>30
// // numbers.map((newNum,i)=>(
// //     console.log(newNum)
// ))





/////// ---------- Array Methods -----------------------------

const vegetables = ["timatar",'aloo',"kaddu","arra torai"]
// // vegetables.push("Loki")
//  let popped_veg = vegetables.pop() 
// console.log(popped_veg)
// vegetables.unshift("began")
// vegetables.shift()
// console.log(vegetables)


// push and pop are fast as compared to shift and unshift 

// primitive vs reference data types 

// let num1 =6;
// let num2 = num1;
// console.log("value is num1 is",num1)
// console.log("val is num2",num2)
// num1++;
// console.log("After incremeting the number")
// console.log("value is num1 is",num1)
// console.log("val is num2",num2)

// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log("The value of array1 is ", array1)
// console.log("The value of array2 is ", array2)
// array1.push("Item3")
// console.log("After pushing the element")
// console.log("The value of array1 is ", array1)
// console.log("The value of array2 is ", array2)




let array_1 = ["item1","item2"]
// let array_2 = [].concat(array_1)
// let array_2 = array_1.slice(0)
let array_2 = [...array_1,"item3","item4","item5"]
console.log(array_2)

// iterate arrays by while loop

// const fruits = ["mango","banana","grapes","strawberry"]
// const fruits2 =[]
// let i=0
// while(i<fruits.length){
//   fruits2.push(fruits[i])
//   i++
// }
// console.log(fruits2)


// const fruits =["apple","mango","grapes"]
// // for(let fruit of fruits){
// //     console.log(fruit.toLocaleUpperCase())
// // }
// for(let index in fruits){
//   console.log(fruits[index])
// }


/// array destructuring 

const myArray = ["value1","value2"];
// let myvar1 = myArray[0]
// let myvar2 = myArray[1]

// console.log("val of my var 1", myvar1)
// console.log("val of my var 2", myvar2)

let [myvar1, myvar2]=myArray
console.log("value of my var 1", myvar1)
console.log("value of my var 2", myvar2)







