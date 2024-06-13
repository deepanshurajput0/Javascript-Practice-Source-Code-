const numbers = [45,45]

const result = numbers.reduce((a,b)=>{
    return b+a  
})

console.log(result)

/// this keyword



const user={
    name:"deepanshu",
    email:"deepanshu@gmail.com",
    price:999,
    welcomeMessage:function(){
        console.log(`Hello ${this.name} Welcome `)
    }
}
user.welcomeMessage()




