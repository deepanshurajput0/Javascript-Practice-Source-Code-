// falsy values
// false, 0, -0, null, undefined, NaN, BigInt 0n ,""

// truthy values 
// true, "0" ,"false","",[],{}, function(){}



const names =[]
if(names.length===0){
    console.log("This is empty array")
}else{
    console.log("This is not empyt array")
}


const myNewObj ={

}

if(Object.keys(myNewObj).length===0){
    console.log('This is Empty Object')
}


// Nulish Coalscing Value 

let val1 = 5 ?? 10
let val2 = null ?? 15
console.log(val2)


// Ternary Operator 

const PhonePrice = 12000

PhonePrice>=12000 ? console.log('You can buy phone') : console.log('Wait for amazon sale')





