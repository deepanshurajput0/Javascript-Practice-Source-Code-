// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// },0)

// console.log(3)


const number = 5
let isPrime = true

if(number===1){
    console.log('This is prime Number')
}else if(number<0){
   console.log('This is not prime number')
}else if(number>1){
      for(let i=2; i<number; i++){
        if(number%i === 0){
           isPrime = false
           break;
        }
      }
      if(isPrime){
        console.log('This is Prime Number')
      }else{
        console.log('This is not Prime Number')
      }
}




// function findFactorial(number){
//     let result = 1
//     for(let i=result; i<=number; i++){
//       result *=i
//     }
//     return result
// }

//  console.log(findFactorial(5))



// find duplicates in an array 

// let array = [1, 2, 3, 4, 5, 2, 7, 8, 9, 1,5];
// const duplicate = array.slice(0)
// if(duplicate[])



// print the sum of first natural numbers 

