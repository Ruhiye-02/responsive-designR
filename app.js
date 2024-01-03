const toggleBtn= document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const doropDownMenu = document.querySelector(".dropdownmenu")
toggleBtn.onclick = function(){
    doropDownMenu.classList.toggle("open")
    const isOpen = doropDownMenu.classList.contains("open")
    toggleBtnIcon.classList = isOpen 
    ? "fa-solid fa-xmark": "fa-solid fa-bars"
}