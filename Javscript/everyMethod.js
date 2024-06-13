/// every method - it apply his condition on every elements 
// and it only returns boolean values 

const numbers = [2,4,6,8,10]

const result =  numbers.every((number)=>{
  return number%2 ===0;
})
console.log(result)



const userCart =[
    {productId: 1, productName:"mobile", price: 12000},
    {productId: 2, productName:"laptop", price: 22000},
    {productId: 3, productName:"tv", price: 15000},
]
const ans = userCart.every((cartItem)=>cartItem.price <30000);
console.log(ans)


