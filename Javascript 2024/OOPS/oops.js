// In JavaScript, Object-Oriented Programming (OOP) is a programming paradigm that allows you to structure your code around objects. While JavaScript is a multi-paradigm language, it supports OOP principles through its prototype-based inheritance system. Here's a brief overview of how OOP works in JavaScript:

// Object 
// collection of properties and methods

// parts of oops
//Object Literal
//Constructor function
//Prototypes
// classes
// Instances (new,this)


// 4 pillars
// Abstraction
// Encapsulation
//Inheritance
// Polymorphism



const user={
    name:"deepanshu",
    email:"deepanshu@gmail.com",
    password:12345678,
    registration:function(){
       return `${this.name} you are user now`
    }
}

console.log(user.name)
console.log(user.registration())

function User(username,email,password){
      this.username = username,
      this.email = email,
      this.password = password
      return this
}

const user1 = new User('shivam','shivam@gmail.com','kanika')
const user2 = new User('abhay','abhay@gmail.com','abhay')
console.log(user1)
console.log(user2)


