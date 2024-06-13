// functions return promise 

// function ricePromise(){
//     const bucket = ["coffee","chips","vegetables","salt","rice"]
//     return new Promise((resolve, reject)=>{
//         if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//             resolve({value:"Fried Rice"}); 
//         }else{
//             reject("Couldn't do it ")
//         }
//     })
    
// }

// ricePromise().then((myfiredRice)=>{
//     console.log("lets eat", myfiredRice)
// }).catch((error)=>{console.log(error)})



/// ------------- promise and set time out 

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = false; 
//         setTimeout(()=>{
//           if(value){
//             resolve();
//           }else{
//             reject(); 
//           }
//         },2000)

//     })
// }

// myPromise()
//        .then(()=>{console.log("Resolved")})
//        .catch(()=>{console.log("rejected")})


// Promise. resolve 
// Promise chaining 

// const myPromise = Promise.resolve(5);
// // Promise.resolve(5).then(value=>{
// //     console.log(value)
// // })
// myPromise.then(value=>{
//     console.log(value)
// })


// then()
// then methods always returns promise 

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("NEw")
//     })
// }

// myPromise()
//    .then(value=>{
//     console.log(value)
//     value += "bar";
//     return value;
//    })
// .then((value)=>{
//     console.log(value)
//     value += "baaz";
//     return value;
// })
// .then(value=>{
//     console.log(value); 
// })




