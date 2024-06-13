/// Parameter destructuring 

const myIntro={
    name:"deepanshu",
    profession:"coding",
    Class:10
}


function getDetails({name,profession,Class}){
  console.log(name)
  console.log(profession)
  console.log(Class)
}  

getDetails(myIntro)





