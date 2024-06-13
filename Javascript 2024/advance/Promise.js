// function fetchData(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         const data ={
//             name:'deepanshu',
//             profession:'coding'
//         }
//          resolve(data)
//        },1000)
//     })
// }




// fetchData().then((data)=>{
//   console.log('Your data fetched successfully',data)
// }).catch((error)=>{
//   console.log('Error while fetching data',error)
// })


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users',{
//     method:'GET',
//     headers:{
//         'Content-type':'application/json'
//     }
// })
// .then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((error)=>{
//   console.log(error)
// })


// function fetchPromiseData(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          const data ={
//             name:"deepanshu",
//             profession:"Programming"
//          }
//          resolve(data)
//        },1000)
//     })
// }


// fetchPromiseData().then((data)=>{
//     console.log('fetched data', data)
// }).catch((error)=>{
//    console.log('error while fetching',error)
// })


// (
//     function(){
//       console.log('this is anonymous function')
//     }
// )();

// const myObj={
//     name:"deepanshu",
//     class:12,
//     profession:"CSE"
// }

// for(let i=0; i<Object.values(myObj).length; i++){
//    let value = Object.values(myObj)[i]
//    console.log(value)
// }

// 
// const myObj ={
//     name:'deepanshu',
//     class:12,
//     profession:'coding'
// }

// for(let i=0; i<Object.values(myObj).length; i++){
//    const data = Object.values(myObj)[i]
//    console.log(data)
// }


function fetchApiData(){
   return new Promise((reject,resolve)=>{
       setTimeout(()=>{
        const myData={
            name:'deepanshu',
            class:10
        }
        resolve(myData)
       },1000)
    })
}

fetchApiData().then((data)=>{
  console.log(data)
}).catch((error)=>{
 console.log(error)
})


