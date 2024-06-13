const userInput = document.getElementsByTagName('input')[0]
const btn = document.querySelector('.btn')
const todoList = document.querySelector('.todos')
btn.addEventListener('click',()=>{
    const uservalue = userInput.value
    const todo = document.createElement(`li`)
    todo.textContent = `${uservalue}`
    todoList.appendChild(todo)
})