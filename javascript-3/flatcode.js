// call back hell to flat code 

const heading1 = document.querySelector('.heading1')
// const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')

function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
            element.textContent = text;
            element.style.color = color;
            resolve();
            }else{
             reject("element not found"); 
            }
        },time)

    })
  
}

// const returnedPromise = changeText(heading1,"one","red",1000); 
// returnedPromise.then(()=>{
//     changeText('heading2','two','purple',1000)
//     return undefined
// })

// changeText(heading1,"one","red",1000)
//  .then(()=>{
//     return changeText(heading2,"two","purple",1000)
//  })
//  .then(()=>{
//     return changeText(heading3,"three","green")
//  })
//  .then(()=>{
//     return changeText(heading4,"Four","yellow",1000)
//  })
//  .then(()=>{
//     return changeText(heading5,"five","violet",1000)
//  })
changeText(heading1,"one","red",1000)
 .then(()=>changeText(heading2,"two","purple",1000))
 .then(()=>changeText(heading3,"three","green"))
 .then(()=>changeText(heading4,"Four","yellow",1000))
 .then(()=>changeText(heading5,"five","violet",1000))
 .catch((error)=>{
    alert(error); 
 })



