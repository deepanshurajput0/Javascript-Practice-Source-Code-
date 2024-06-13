// async await 

// fetch(URL)
//    .then(response =>{
//     return response.json()
//    })
//    .then(data =>{
//     console.log(data); 
//    })

const URL = "https://jsonplaceholder.typicode.com/posts"

async function getPosts(){
    const response = await fetch(URL);
    const data = response.json(); 
    // console.log(data);
    return data;   

}

getPosts()
    .then(myData =>{
    console.log(myData)
    })
    .then(error =>{
    console.log("inside catch")
    console.log(error) 
    })

// console.log(returned);


