/// objects 

// const person = {
//     NAme: "Deepanshu Verma",
//     Class : 12,
//     Goal: "Entrepreneur & Angel Investor ",
//     Inspiration : "ELon Musk"

// }

// console.log(person);


// Interate objects by for in loop 

// for( let keys in person){
//     console.log(keys, person[keys]);

// }

// Interatr objects by for of loop 

// for ( let keys of person){
//     console.log(keys)
// }


// console.log(Object.keys(person));
// const val = Array.isArray((Object.keys(person)));
// console.log(val)



// for (let key of Object.keys(person)){
//     console.log(person[key]); 
// }




/// --------------------- Computed Properties -------------------------------


// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1";
// const value2 = "myvalue2";


// const obj = {
//     [key1] : value1,
//     [key2] : value2, 
// }

// console.log(obj)

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2; 
// console.log(obj)



/// spread operators in objects 

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };
// const obj2 = {
//     key3: "value3",
//     key4: "value4",
// }

// const newObj = {...obj1, ...obj2, key69:"value68", ..."abc"};
// console.log(newObj);




// const val1 = "myvalue1"
// const val2 = "myvalue2"

// const obj = "Myobj"
// const obj2 = "Myobj2"


// const newobj = {
//     [val1] : obj,
//     [val2] : obj2,
// }

// console.log(newobj)




/////// --------------- Object destructuring --------------------------


// const myNewObj = {
//     "Friend1": "Deepanshu",
//     "Friend2": "Deepanshu",
//     "Friend3": "Deepanshu",
// }

// let var1 = myNewObj.Friend1
// let var2 = myNewObj.Friend2

// let { Friend1:var1, Friend2} = myNewObj;
// Friend2 = "Rizwand"; 
// console.log(myNewObj);

// ----------------------- Object Destructuring ------------------------////


// const myIntro = {
//     Name : "Deepanshu Verma",
//     Class : 12,
//     Goal: "Entrepreneur & Angel Investor",
//     Inspiration: "Elon Musk",
// }

// const {Name, Goal, ...restProps} = myIntro
// console.log(Name)
// console.log(restProps)



/// ------------------- Objects Inside Array -----------------------------///


const user = [
    {userId:1 , Name:"Deepanshu", Goal: "Entrepreneur", Gender:"Male"},
    {userId:2 , Name:"Shashank", Goal: "Entrepreneur", Gender:"Male"},
    {userId:3 , Name:"Vivek", Goal: "Entrepreneur", Gender:"Male"},
]

for( let users of user){
    console.log(users.Goal)
}

/// --------------------------- Nested Destructuring ---------------------//

const [{Name},, {Gender}]= user; 
console.log(Name);
console.log(Gender);


function isEven(Number){
    if(Number % 2 ===0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(2))






