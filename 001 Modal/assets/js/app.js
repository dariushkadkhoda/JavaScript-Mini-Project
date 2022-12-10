const btnOpen = document.querySelector(".open")
const btnClose = document.querySelector(".close")
const modal = document.querySelector(".container")

console.log(modal)
btnOpen.addEventListener('click',function(){
    modal.classList.add('show')
})
btnClose.addEventListener('click',()=>{
    modal.classList.remove('show')
})