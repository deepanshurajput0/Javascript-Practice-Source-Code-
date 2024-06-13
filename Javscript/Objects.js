// let arr =[
//     {user:1, Name:"Deepanshu"},
//     {user:2, Name:"Aryan"},
//     {user:3, Name:"Insan Kumar"},
// ]

// let [ {Name}, item1, item2]= arr
// // console.log(item1)
// // console.log(item2)
// console.log(Name)



const myData={
    name:"Deepanshu",
    fun: function(){
        console.log(this.name)
    }
}

const my2Data={
    name:"Deepanshu Verma",
    fun:function(){
        console.log(this.name)
    }
}

myData.fun.call(my2Data)
myData.fun.apply(my2Data) 
myData.fun.bind(my2Data)
