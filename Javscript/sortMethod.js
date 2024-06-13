const arr = [12,34,56,78,12,4,8]

const result = arr.sort((a,b)=>{
  return b-a 
})

console.log(result)

const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
]
// low to high

// const output=products.slice(0).sort((a,b)=>{
//   return a.price - b.price
// })
// console.log(output)


const output=products.slice(0).sort((a,b)=>{
    return b.price - a.price
  })
  console.log(output)