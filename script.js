const search=document.querySelector('.container')

const searchInput=document.querySelector('.input')
const searchIcon=document.querySelector('.button')


searchIcon.addEventListener('click', ()=>{
//     if(searchIcon.classList.contains("active")){
// search.classList.remove("active")
// searchInput.value=""
//     }else{
//         search.classList.add("active")
//     }

search.classList.toggle("active")
searchInput.focus()
    
})