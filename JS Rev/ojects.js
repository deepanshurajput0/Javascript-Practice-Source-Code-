// const key ="email"
// const myData ={
//     Name:"Deepanshu",
//     Class:12,
//     Desc:"I am a Software Developer",
//     Hobbies:["coding",'blogging','graphic designing','learning technologies']
// }
// myData.LastName="Verma"
// myData[key]="deepanshuverma23@gmail.com"
// console.log(myData)


// iterate objects 

// const myData ={
//     Name:"Deepanshu",
//     Class:12,
//     Desc:"I am a Software Developer",
//     Hobbies:["coding",'blogging','graphic designing','learning technologies']
// }

// for in loop
// for(let myDatas in myData){
//     console.log(myDatas,":",myData[myDatas])
// }
// object keys 
// console.log(Object.keys(myData))

// for(let keys of Object.keys(myData)){
//     console.log(myData[keys])
// }


// const key1 ="objkey1"
// const key2 ="objkey2"

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj={
//     [key1]:value1,
//     [key2]:value2,
// }

// console.log(obj)

// Object destructuring ----------------------------------

// const band = {
//     bandName:"BTS",
//     famousSong:"Tu Aake Dekh le",
//     Name:"Deepanshu Verma"
// }

// // const bandName = band.bandName
// // const famousSong = band.famousSong
// // console.log(bandName)
// // console.log(famousSong)

// const {bandName, famousSong, ...restprops} = band;
// // band.Name="Deepanshu"
// console.log(bandName,famousSong,restprops)
// // console.log(band)



// objects inside the array 

// const users = [
//     {UserID:1, firstName:"Deepanshu",LastName:"Verma"},
//     {UserID:2, firstName:"Rishaabh",LastName:"Verma"},
//     {UserID:3, firstName:"Krishan",LastName:"Verma"},
//     {UserID:4, firstName:"Aryan",LastName:"Verma"},

// ]

// for(let user of users){
//     console.log(user.firstName)
// }


/// iterate objects 

// const myIntro={
//     Name:"Deepanshu Verma",
//     FavSubject:"Computer Science",
//     Goal:"Software Developer",

// }

// for(let intro in myIntro){
//     console.log(`${intro}: ${myIntro[intro]}`)
// }

/// nested destructuring 

const users = [
    {UserID:1, firstName:"Deepanshu",LastName:"Verma"},
    {UserID:2, firstName:"Rishaabh",LastName:"Verma"},
    {UserID:3, firstName:"Krishan",LastName:"kumar"},
    {UserID:4, firstName:"Aryan",LastName:"Verma"},

]

// const [user1,user2,user3]=users;
// console.log(user1)

const [{firstName},, {LastName}]=users
console.log(firstName,LastName)


