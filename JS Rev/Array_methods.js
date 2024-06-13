/// Important Array Methods 

// for each 

// const numbers = [4,2,5,8]

// function myFunc(number, index){
//    console.log("index is ", index)
//    console.log(number*2)
// }

// multiplyBy2(numbers[0], 0)

// for(let i=0; i<numbers.length; i++){
//     console.log(i)
//     multiplyBy2(numbers[i], i)
// }


// numbers.forEach(myFunc);


/// For each method 

// const numbers = [2,4,6,8,10]
// numbers.forEach(function(number){
//     console.log(number*3)
// })

// const users = [
//     {firstName: "Deepanshu", age:18},
//     {firstName: "Chirag", age:18},
//     {firstName: "Mayank", age:18},
//     {firstName: "Shivam", age:18},
// ]

// users.map((user)=>{
//    console.log(user.firstName)
// })

// users.forEach((fname, index)=>{
//    console.log(fname.firstName, index)
// })



// map method 


// const numbers = [3,4,5,6,7]

// const square = function(number){
//    return number * number
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);



/// filter method 

// const numbers = [1,2,3,4,5,6,7,8]

// // const isEven= function(number){
// //    return number%2 ===0;
// // }

// // const evenNumbers = numbers.filter(isEven);
// // console.log(evenNumbers);

// const evenNumbers = numbers.filter((number)=>{
//   return number%2 ===0;
// })

// console.log(evenNumbers);


//// ---------------------------- Reduce Method ---------------------------------//

// const numbers = [1,2,3,4,5,10]

// const sum =  numbers.reduce((accumulator, currentvalue)=>{
//    return accumulator + currentvalue; 
// })

// console.log(sum);


// const userCart = [
//    {productId:1, productName: "mobile", price: 12000},
//    {productId:2, productName: "laptop", price: 22000},
//    {productId:3, productName: "tv", price: 52000},
// ]

// const totalAmount = userCart.reduce((totalprice, currentProduct)=>{
//    return totalprice + currentProduct.price
// },0)
// console.log(totalAmount);



// array methods 

const number = [1,2,3,4,4]

number.forEach((num)=>{
   console.log(num*2)
})


const users = [
   {Username: "Deepanshu",Goal:"Entrepreneur", Inspiration: "Elon Musk"},
   {Username: "Mayank",Goal:"NDA", Inspiration: "yourself"},
   {Username: "Vivek",Goal:"Entrepreneur", Inspiration: "Sandeep Maheshwari"},
]

users.forEach((user)=>{
   console.log(user.Username)
   console.log(user.Goal)
   console.log(user.Inspiration)
})


/// NOw using map method

const data = [
   {FirstName: "Dhruv", Rollno: 23, Class:12},
   {FirstName: "Chirag", Rollno: 9, Class:12},
   {FirstName: "Insan", Rollno: 34, Class:12},
]

data.map((user)=>{
  console.log(user.Rollno*2)
})


/// filter methods 


const numbers = [ 2,4,6,7,5,4]

const isEven = numbers.filter((num)=>{
   return num%2 ===0;
})

console.log(isEven);


/// reduce method 

const no = [2,4,5,7,85]

const sum=no.reduce((accumulator, currenvalue)=>{
   return accumulator + currenvalue;
})
console.log(sum)





















