 // sum of n natural numbers 
//  function naturalNumber(n){
//     let sum = 0;
//    for(let i=1; i<=n; i++){
//     sum+= i
// }
//   return sum
//  }

//   const result = naturalNumber(50)
//   console.log(result)

// find the factorial of number 

// function findFactorial(n){
//     let result = 1
//   for(let i=1; i<=n; i++){
//     result = result*i
//   }
//   return result
// }

// console.log(findFactorial(5))


// 2nd method 



// const str = 'my self deepanshu'
// const finalResult = str.split(" ").map((word)=>{
//    return word.split('').reverse().join('')
// })

// console.log(finalResult)


// check valus if array or not 

// const names = {
//    name:'deepanshu'
// }

// function isArray(value){
//   const check = Array.isArray(value)
//   if(check){
//    return 'This is Array'
//   }else{
//    return 'This is Object'
//   }
// }

// console.log(isArray({}))

/// empty array 

// const array = [1,2,3,4,5,6,7,8]
//  array.length = 0
// console.log(array)

// const number = 1.5
// if(number%1===0){
//    console.log('this is integer')
// }else if(number%1 !==0){
//    console.log('this is not integer')
// }



// function duplicateArray(array){
//    return [...array,...array]
// }

// console.log(duplicateArray([1,2,3,4,5]))

 
//write a function which reverse the number 


// function reverseNumber(num){
//   const finalNumber =  num.toString().split('').reverse().join('')
//   return finalNumber
// }

//  console.log(Number(reverseNumber(45.56)))



// function palinDromeChecker(value){
//    const value1 = value.split('').reverse().join('').toLowerCase()
//    const value2 = value.toLowerCase()
//    if(value1 === value2){
//       return `${value} is Palindrome`
//    }else{
//       return 'This is not PalinDrome'
//    }
// }

// console.log(palinDromeChecker('deepanshu'))


// print any string in alphabetical orders 


// function alphabeticalOrder(value){
//   return value.split('').sort()
// }

// console.log(alphabeticalOrder("deepanshu"))



// function upperCaseConverter(value) {
//    const all_words = value.split(' ').map((word) => {
//      return word.charAt(0).toUpperCase() + word.substring(1);
//    });
//    console.log(all_words.join(' '));
//  }
 
//  upperCaseConverter('hello bro');
 

// function dataTypeChecker(value){
//    return typeof value
// }

//  console.log(dataTypeChecker(12))



// function occurances (str){
//    let occ ={}
//    str.split('').forEach((ele)=>{
//       if(occ.hasOwnProperty(ele) === false){
//           occ[ele] = 1
//       }else{
//          occ[ele]++
//       }
//  })
//  return occ
// }

// console.log(occurances('apple'))


// let numbers = [1,2,3,4,5]
// let sum = 0
// for(let i=0; i<numbers.length; i++){
//   sum = sum + numbers[i]
//   console.log(sum)
// }




// let myArray =[
//    {name:"deepanshu",gender:'male'},
//    {name:"shivam",gender:'female'},
//    {name:"chirag",gender:'female'},
//    {name:"aman",gender:'male'},
//    {name:"vishal",gender:'male'},
// ]
// const result = myArray.filter((item)=>{
//    if(item.gender !== 'female'){
//       return myArray.length
//    }
// })

// console.log(result)

// let count = 0
// myArray.forEach((item)=>{
//    if(item.gender !== 'male'){
//       count++
//    }
// })



// for(let i=0; i<= count; i++ ){
//    for(let j=0; j<myArray.length; j++){
//       if(myArray[j].gender !== 'male'){
//          myArray.splice(j,1)
//       }
//    }
// }

// console.log(myArray)


// function retrieve(n,f){
  
//    if(n && f){
//      return n.splice(0,f)
//    }else{
//       return n[0]
//    }
// }

// console.log(retrieve([1,2,3,4,6,7,8]))


// by using loop 


// function retrieve(arr,n = 1){
//  if(n<= arr.length){
//    for(let i=0; i<n; i++){
//       console.log(arr[i])
//    }
//  }else{
//    console.log('Your value is too big')
//  }
// }

// retrieve([1,2,3,4,5,6,7],6)


// let num = 5
// let fac = 1
// for(let i=1; i<=num; i++){
//    fac = fac* i
//    console.log(fac)  
// }


const names = ['deepanshu','aman','abhay','chirag']

const arrayLength = Math.floor(Math.random()*names.length)
console.log(names[arrayLength])

// random color generator 


// const hex = '0123456789ABCDEF'
// let randomHex = '#'
// for(let i=0; i<6; i++){
//      console.log(hex[Math.floor(Math.random()*hex.length)])
// }
// console.log(randomHex)



// build a random password generator 

const randomPass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&&*'
let Password = ''
for(let i=0; i<=8; i++){
   Password += randomPass[Math.floor(Math.random()*randomPass.length)] 
}
console.log(Password)


