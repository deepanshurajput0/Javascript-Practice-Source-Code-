/// Objects 


// const newSym =  Symbol("Symbol")

// const myData = {
//     name:"deepanshu",
//     [newSym]:"Symbol",
//     email:"deepanshu@gmail.com",
//     password:"89#$653",
//     Admin:true
// }

// myData.isLoggedIn ="Yes"

// myData.greetings = function(){
//     console.log(`Welcome ${this.name}`)
// }

// Object.freeze(myData)
// myData.show = "TMKOC"

// console.log(myData)


const newObj = new Object();
newObj.userName = "deepanshu";
newObj.password = 12345678;

if (newObj.userName == "deepanshu" && newObj.password == 12345678) {

    console.log("Login Success",newObj);
} else {
    console.log("Invalid User")
}


const obj1 = {1:'a',2:'b',3:'c'}
const obj2 ={4:'d',5:'e',6:'f'}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)



const users =[
    {
        id:1,
        name:"deepanshu"
    },{
        id:2,
        name:"rishabh"
    },{
        id:3,
        name:"umesh"
    }
]


console.log(users[0].name)


console.log(Object.keys(newObj))
console.log(Object.values(newObj))
console.log(Object.entries(newObj))


console.log(newObj.hasOwnProperty('userName'))


// Object Destructuring 

const course={
    courseName:"Javascript",
    language:"Hindi",
    courseInstructor:"deepanshu"
}

const { courseInstructor:courseIns } = course
console.log(courseIns)



/// JSON - It stands for Javascript Object Notation

// Fetch api 
const ApiFetch =async()=>{
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
}




ApiFetch() 


