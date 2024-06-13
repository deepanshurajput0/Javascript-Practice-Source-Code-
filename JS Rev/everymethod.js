/// every method 


// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0);
// console.log(ans)


// const userCart = [
//     {productId : 1 , productName:"Mobile",price: 12000},
//     {productId : 2 , productName:"laptop",price: 22000},
//     {productId : 3 , productName:"Tv",price: 15000},
// ]

// const ans = userCart.every((cartItem)=>cartItem.price<30000);
// console.log(ans)


///// Every Methods revsion


// const numbers =[2,4,2,4,4,6]

// const ans = numbers.every((number)=>number%2===0)
// console.log(ans)




const userCart = [
    {ProductID : 1, ProductName:" Mobile",Price : 18000},
    {ProductID : 2, ProductName:" Laptop",Price : 18000},
    {ProductID : 3, ProductName:" T.V",Price : 18000},
    {ProductID : 4, ProductName:" Silai Machine",Price : 18000},
]

const ans = userCart.every((product)=>product.Price>10000)
console.log(ans)


