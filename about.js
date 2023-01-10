burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navtools = document.querySelector('.navtools')
rightnav = document.querySelector('.rightnav ')


burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp')
    navtools.classList.toggle('v-class-resp')
    rightnav.classList.toggle('v-class-resp')

})

