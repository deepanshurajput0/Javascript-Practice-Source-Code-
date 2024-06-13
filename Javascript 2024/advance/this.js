// const myObj ={
//     name:"deepanshu",
//     age:18,
//     about:function(){
//         console.log(`My name is ${this.name} and Age is ${this.age}`)
//     }
// }

// myObj.about()


// function About(){
//     console.log(`Name is ${this.name} and age is ${this.age}`)
// }
// const person1 ={
//     name:'abhay',
//     age:20,
//     about: About
// }

// const person2 ={
//     name:'deepanshu',
//     age:19,
//     about:About
// }

// const person3={
//     name:"shivam",
//     age:17,
//     about:About
// }

// person1.about()
// person2.about()
// person3.about()



/// call apply and bind 


const person1={
    name:'deepanshu',
    surname:'verma',
    fullName: function(hometown,country){
        console.log(this.name + ' ' + this.surname  + ' ' + hometown + ' ' + country )
    }
}


const person2 ={
    name:'shivam',
    surname:'lodhi'
}


person1.fullName.call(person2,'Dhamera Adda Kuti')
person1.fullName.apply(person2,['Bulandshahr','India'])
const myfunc = person1.fullName.bind(person2)
myfunc()


