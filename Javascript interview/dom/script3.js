const theme = document.querySelector('.lighttheme')
const btn = document.querySelector('.btn')

// theme.classList.remove('container')
btn.addEventListener('click',()=>{
    theme.classList.toggle("darktheme")
})