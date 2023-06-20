const menuIcon = document.getElementsByClassName('menu-icon')[0]
const nav = document.getElementsByClassName('nav')[0]

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active')
})