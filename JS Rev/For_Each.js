/// For each method 

// const numbers = [2,4,6,8,10]
// numbers.forEach(function(number){
//     console.log(number*3)
// })

// const users = [
//     {firstName: "Deepanshu", age:18},
//     {firstName: "Chirag", age:18},
//     {firstName: "Mayank", age:18},
//     {firstName: "Shivam", age:18},
// ]

// users.forEach((fname, index)=>{
//    console.log(fname.firstName, index)
// })


// const persons = [
//     {firstName: "Deepanshu", lastName:"Verma", age:18},
//     {firstName: "Vivek", lastName:"kumar", age:18},
//     {firstName: "Aryan", lastName:"singh", age:18},
//     {firstName: "Abhay", lastName:"Kumar", age:18},
//     {firstName: "Chirag", lastName:"Ch", age:18},
// ]


// persons.forEach((fname, index)=>{
//     console.log(fname.firstName, index)
// })


// persons.map((fname, index)=>{
//     console.log(fname.firstName)
// })



// /------------------------- Iterate Objects ----------------------////////////


// const myInfo = {
//     Name: "Deepanshu",
//     Age: 18,
//     Goal: "Entrepreneur & Angel Investor",
//     Inspiration: "Me & Little Bit Elon MUsk",
//     Skills: ["Video Editing","Graphic Designing"," Frontend Development", "Seo","Blogging"],
//     learnings: ["App Developmnt","Machine Learning","Artifical Intellegence","Data Science","Books"]

// }

// for( let details in myInfo){
//     console.log(details)
// }


// ///---------------------------------- Building a game which tells  future -----------------/////

// const name = prompt("Enter Your Name")
// const age = prompt("Enter the Age")
// const rashi = prompt("Enter your Rashi")

// if(name===){

// }



//// -------------------- For Each Method -------------------------------///////

// const myinfo  = [
//  {"Name":"Deepanshu","Class" : 12, "Goal" : "Entrepreneur"},
//  {"Name":"Mayank","Class" : 12, "Goal" : "Nda"},
//  {"Name":"Shivam","Class" : 12, "Goal" : "Software Developer"},
//  {"Name":"Umesh","Class" : 12, "Goal" : "Teacher"},
//  {"Name":"Ananaya","Class" : 12, "Goal" : "Entrepreneur"},
// ]


// myinfo.forEach((fname, index)=>{
//    console.log(index)
// })




///////////////------------------------- sort method-------------------------------///////////////


// const numbers = [5,9,5,4,3,38,5,6]
// const userNamees = ["harshit","mohit","nitish"]
// userNamees.sort();
// console.log(userNamees)


const numbers = [5,8,90,24,12,7]
// function sortedNumbers(a,b){
//    console.log(" These are the sorted Numbers")
//    return a-b; 
// }

numbers.sort((a,b)=>{
  return a-b; 
})
console.log(numbers)



const products = [
    {productNameId : 1, productName: "p1",price: 200},
    {productNameId : 2, productName: "p2",price: 3000},
    {productNameId : 3, productName: "p3",price: 200},
    {productNameId : 4, productName: "p4",price: 8000},
    {productNameId : 5, productName: "p5",price: 300},
]

products.sort((a,b)=>{
    return a.price-b.price

});

console.log(products)


















// const array = ["hello","cat","dog","lion"]
// function isLength(){
//     return String.length === 3;
// }


// const ans = isLength("doggy")
// HTMLFormControlsCollection.log("")
