// const number = Math.floor(Math.random()*100)
// console.log(number)
// let isPrime = true
// if(number===1){
//     console.log(`${number} this is prime number`)
// }else if(number<=0){
//   console.log('This is not prime number')
// }
// else if(number>1){
//     for(let i=2; i<number; i++){
//           if(number %i==0){ 
//             isPrime = false
//             break;
//           }
//     }
//     if(isPrime){
//         console.log('This is prime number')
//     }else{
//         console.log('This is not prime number')
//     }
// }


function findFactorial(n){
  let result = 1
  for(let i=1; i<=n; i++){
      result *=i
  }
  return result
}

console.log(findFactorial(5))


