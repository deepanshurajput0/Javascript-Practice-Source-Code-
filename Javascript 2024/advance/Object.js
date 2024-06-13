// function createUser(firstname,lastname,email,address,age){
//      const user ={}
//      user.firstname = firstname,
//      user.lastname = lastname,
//      user.email = email,
//      user.age = age
//      user.address = address,
//      user.about = function(){
//         return `${this.firstname} is ${this.age} years old`
//      },
//      user.is18 = function(){
//         return this.age>=18
//      }
//      return user;
// }

// const user1 = createUser('deepanshu','verma','deepanshu@gmail.com','dhamera adda',18)
// console.log(user1)
// console.log(user1.about())



// const obj1 ={
//    key1:"value1",
//    key2:"value2"
// }

// const obj2 = Object.create(obj1)
// obj2.key3 = "value3"
// console.log(obj2.key1)

// const userMethods={
//    about:function(){
//       return `Your Name is ${this.firstname + this.lastname} And Your Age is ${this.age}`
//    },
//    Age:function(){
//       return `${this.age>18}`
//    }
// }

function createUser(firstname,lastname,email,password,age){
   const user = Object.create(createUser.prototype) 
    user.firstname = firstname,
    user.lastname = lastname,
    user.email = email,
    user.password = password,
    user.age = age
    return user
}

createUser.prototype.about = function(){
   return `Your Name is ${this.firstname + this.lastname} And Your Age is ${this.age}`
}
createUser.prototype.Age = function(){
   return `${this.age>18}`
}
const user1 =  createUser('deepanshu','verma','deepanshu@gmail.com',89674523,19)
console.log(user1.Age())

