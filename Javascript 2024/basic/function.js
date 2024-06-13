// what is function a piece of code which is run when we call 

// function sayHello(name){
//     console.log("Hello " + name)
// }

// sayHello("deepanshu")


function LoginUser(userName){
    if(userName === undefined){
        console.log("UserName is Required")
        return
    }
  return userName + 'Just Logged In'
}

console.log(LoginUser())



const ourData ={
  course:'React js',
  price:1200
}


function getCourseData(any){
   return any.price
}

console.log(getCourseData(ourData))


const myNewArray = [10,30,70,100,120]
function getArrayData(myNewArray){
  return myNewArray[3]
}

console.log(getArrayData(myNewArray))







