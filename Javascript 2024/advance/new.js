function myData(firstname,lastname,age){
      this.firstname = firstname,
      this.lastname = lastname,
      this.age = age
      return this
}

myData.prototype.about = function(){
    return `${this.firstname}${this.lastname} is ${this.age} years old`
}
const user1 = new myData('deepanshu','verma',19)
console.log(user1.about())



for(let key in user1){
  if(user1.hasOwnProperty(key)){
    console.log(key)
  }
// console.log(key)
}





