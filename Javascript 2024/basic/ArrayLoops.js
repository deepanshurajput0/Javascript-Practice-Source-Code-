let numbers = [12,34,12,65,89]
for(let num of numbers){
  console.log(num)
}

let myMap = new Map()
myMap.set('name','deepanshu')
myMap.set('class',12)
myMap.set('profession','coding')
myMap.set('subject','CSE')

for(let [key,value] of myMap){
  console.log(key,value)
}



const coding={
    javascript:"web developemnt",
    python:"Machine Learning",
    java:'andriod developemnt',
    C:'DSA'
}


// for(let codes in coding){
//    console.log(`${codes} is used in ${coding[codes]}`)
// }

const languages =['python','Javascript','C++','Swift','Ruby','Java','C#','Dart']
languages.forEach((lang,index,arr)=>{
 console.log(lang,index, arr)
})


const users =[
  {
    language:"Javascript",
    use:"Web development"
  },
  {
    language:"Python",
    use:"Machine Learning"
  },
  {
    language:"Java",
    use:"Andriod Development"
  }
]

users.forEach((user)=>{
 console.log(user)
})

