// understand callbacks 

// function myFunc(callback){
//     console.log("Function is doing task1")
//     callback()
// }
// // function myFunc2(){
// //     console.log("Function is doing task2 ")
// // }

// myFunc(function myFunc2(){
//     console.log("Function is doing task2 ")
// });

// function getTwoNumbers(number1, number2, callback){
//     if( typeof number1 === "number" && typeof number2 ==="number")
//     // console.log(number1, number2)
//     callback(number1, number2)
//     else{
//         console.log("Wrong data type")
//     }
// } 

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }

// getTwoNumbers("4","5", addTwoNumbers);

// function Names(callback){
//     console.log("Deepanshu")
//     callback()
// }

// function goal(){
//     console.log("Entrepreneur")
// }

// Names(goal);


const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
// setTimeout(()=>{
//     heading1.textContent="Heading1"
//     heading1.style.color="red"
//     setTimeout(()=>{
//         heading2.textContent="Heading2"
//         heading2.style.color="blue"
//     },2000)
//     setTimeout(()=>{
//         heading3.textContent="Heading3"
//         heading3.style.color="yellow"
//     },2000)
//     setTimeout(()=>{
//         heading4.textContent="Heading4"
//         heading4.style.color="green"
//     },1000)
//     setTimeout(()=>{
//         heading5.textContent="Heading5"
//         heading5.style.color="violet"
//     },1000)
    
    
// },4000)


// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
//     setTimeout(()=>{
//         if(element){
//         element.textContent = text;
//         element.style.color = color;
//         if(onSuccessCallback){
//             onSuccessCallback()  
//         }
//         }else{
//             console.log("You element doesn't exist")
//         }
//     },time)
// }

// // changeText(heading1,"one","violet",3000,()=>{
// //     changeText(heading2, "two","green",1000)
// // });

// changeText(heading1,"one","violet",1000,()=>{

//     changeText(heading2,"two","purple",1000,()=>{
        
// changeText(heading3,"three","green",1000,()=>{

// },()=>{console.log("Heading3 does not exist")})

    
// changeText(heading4,"Heading4","blue",1000,()=>{

// },()=>{console.log("Heading4 does not exist")})

// changeText(heading5,"Haeding5","pink",1000,()=>{

// },()=>{console.log("Heading5 does not exist")})
//     },()=>{console.log("Heading2 does not exist")})
        
// },()=>{console.log("Heading1 does not exist")})











