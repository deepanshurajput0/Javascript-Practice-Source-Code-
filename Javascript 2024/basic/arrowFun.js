/// Arrow function 

const user ={
    username:'deepanshu',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage
user.username ="rishabh"
user.welcomeMessage()