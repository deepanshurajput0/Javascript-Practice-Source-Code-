/// find method in array 

const data = ["table","pen","fan","chair","cycle"]

function isLength(string){
   return string.length === 3
}
const result = data.find(isLength)
console.log(result)

const products = [
    {productId:1, productName:"Washing Machine", productPrice:22000},
    {productId:2, productName:"Generator", productPrice:22000},
    {productId:3, productName:"Washing Machine", productPrice:22000},
]

const result2 =  products.find((productId)=>{
   return productId.productId === 3
})
console.log(result2)
