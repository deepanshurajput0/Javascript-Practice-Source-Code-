// const person ={
//     firstName:"deepanshu",
//     lastName:"Verma",
//     id : 34353,
//     fullName : function(){
//         return this.firstName+""+ this.lastName
//     }
// }

// console.log(person.fullName)


// const person2 = {
//     name:"abhay",
//     lastName:"kumar"
// }

// person.fullName.call(person2)

/// this basically a obj 


const obj ={
    fName:"Deepanshu",
    Age:18,
    fun: function(){
        console.log(this.fName)
    }
}

obj.fun()