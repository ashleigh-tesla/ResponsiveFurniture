let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('open')
}
window.onscroll = () => {
    navbar.classList.remove('open')
}