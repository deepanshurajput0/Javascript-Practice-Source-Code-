// some Method 
// In some method it checks only one elements 
// if one condition of element is true then it returns true 
const numbers = [3,5,8,9]

// kya koi aisa number hain jo even hain 

const ans = numbers.some((number)=>{
  return number%2===0;
})
console.log(ans)


const userCart = [
    {productId:1, productName:"mobile", price: 12000},
    {productId:2, productName:"laptop", price: 22000},
    {productId:3, productName:"tv", price: 11000},
]

const result = userCart.some((cartItem)=>{
  return  cartItem.price > 12000
})
console.log(result)



