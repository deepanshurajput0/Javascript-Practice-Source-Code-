class User {
    constructor(username){
     this.username = username
    }

    logme(){
        return `${this.username} Logged In`
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username),
        this.email = email,
        this.password = password
    }
    emailMe(){
        return `${this.email}`
    }
}

const username = new User('deepanshu')
const course = new Teacher('deepanshu')
console.log(course)