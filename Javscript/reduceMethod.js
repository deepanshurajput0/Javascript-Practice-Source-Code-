// reduce 

// const numbers = [1,2,3,4,5]

// // aim : sum of all the numbers 
// const sum = numbers.reduce((accumulator,currentValue)=>{
//    return accumulator + currentValue
// },100)

// console.log(sum)

// accumulator , currentValue  return 
// 1           ,     2          3 
// 3           ,     3          6
// 6           ,     4          10
// 10          ,     5          15

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "Tv", price: 15000},
    {productId: 4, productName: "silai machine", price: 12000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
  return  totalPrice + currentProduct.price 
},0)
console.log(totalAmount)