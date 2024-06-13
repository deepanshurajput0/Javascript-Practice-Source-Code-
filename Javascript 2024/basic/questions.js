const minutes = 60
const seconds = minutes * 60
console.log(`${seconds} seconds`)


/// Return the Next Number from the Integer Passed

function NextNumber(num){
    return num+1
}

const result = NextNumber(0)
console.log(result)


/// Area of Triangle 

function areaOfTriangle(base,height){
    return 1/2*base*height
}

const area =  areaOfTriangle(4,5)
console.log(area)


// Convert Age into Days 

function Days(age){
  return age*365
}

const convert = Days(18)
console.log(convert)


// find cube of numbers 


const number = 3
const cube = number**3
console.log(cube)


// square of number 
const num = 2
const square = num **2
console.log(square)


// find even nnumber 

function findEven(num){
  if(num%2===0){
    return "This is even number"
  }else{
    return "this is odd number"
  }
}
console.log(findEven(9))


// find prime number 

const ourNumber = 3
let isPrime = true

if(ourNumber===1){
   console.log("This is prime number")
}else if(ourNumber<=0){
  console.log("This is not prime number")
}else if(ourNumber>1){
     for(let i=2; i<ourNumber; i++){
         if(ourNumber%i==0){
             isPrime= false
            break;
         }
     }
     if(isPrime){
        console.log("This is Prime Number")
     }else{
     console.log("This is not prime number")
     }
}


// Write a program to find a maximum value in array 

const numbers =[2,78,34,90,34,400]

const getHighValue= numbers.sort(function(a,b){
   return b-a
})
console.log(getHighValue[0])


  /// reverse string 

  const userString = "deepanshu"
  const reversedString = userString.split("").reverse().join("")
  console.log(reversedString)


  // Check the String is it palindrome or not 

  function Checkpalindrome(word){
       const palindrome = word.split("").reverse("").join("")
       if(palindrome === word){
        return "This String is palindrome"
       }else{
        return "This is not palindrome"
       }
  }

   console.log(Checkpalindrome("radar"))


//    Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

   const mixedNum = [2,9,10,34,76,77,89,19,46]

   const getEvenNumbers = mixedNum.filter(function(numbers){
      return numbers%2===0;
   })
   console.log(getEvenNumbers)

