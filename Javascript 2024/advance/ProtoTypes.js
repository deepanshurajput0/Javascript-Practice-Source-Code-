// function user(){
//     return 'Deepanshu'
// }
// user.prototype.abc = 'abc'
// user.prototype.xyz = 'xyz'
// console.log(user.prototype)

// // const user ={
//     name:'deepanshu'
// }


// if(user.prototype){
//     console.log('ProtoType is Present')
// }else{
//     console.log('Prototype is not present')
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
 console.log(user1)
 
 
function WishMe(){
   return 'Happy Birthday'
}
WishMe.prototype.name ="deepanshu"
WishMe.prototype.lastname ="Verma"
console.log(WishMe)