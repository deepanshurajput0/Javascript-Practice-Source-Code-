
class User{
  constructor(name,email,password){
    this.name = name,
    this.email = email,
    this.password = password
  }

  greet(){
    return `Hello ${this.name} How are you`
  }
}

const ourUser = new User('deepanshu','deepanshu@gmail.com','123435')
console.log(ourUser.greet())


