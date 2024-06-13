// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(){
//     return new Promise(function(resolve,reject){
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(xhr.status >=200 && xhr.status <300){
//                 resolve(xhr.response)
//             }else{
//                 reject(new Error("Something went Wrong"))
//             }
//         } 

//         xhr.onerror = function(){
//             reject(new Error("Something went Wrong")); 
//         }

//         xhr.send(); 
//     })
// }

// sendRequest("GET", URL)
//    .then(response =>{
//       const data = JSON.parse(response);
//       return data;  
//    })
//    .then(data=>{
//     console.log(data[3].id)
//    })

