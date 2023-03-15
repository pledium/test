// NavBar animation
const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

// modals
const regModalOv = document.querySelector('.modal-overlay')
const regModalWin = document.querySelector('.modal-window')
const loginModalOv = document.querySelector('.login-modal-overlay')
const loginModalWin = document.querySelector('.login-modal-window')
const body = document.body

function showRegModal() {
    regModalOv.classList.add('open')
    regModalWin.classList.add('open')
    body.classList.add('modal-open')
}

function showLoginModal() {
    loginModalOv.classList.add('open')
    loginModalWin.classList.add('open')
    body.classList.add('modal-open')
}

const modalCloseBtns = document.querySelectorAll('.modal-close')

modalCloseBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        regModalOv.classList.remove('open')
        regModalWin.classList.remove('open')
        loginModalOv.classList.remove('open')
        loginModalWin.classList.remove('open')
        body.classList.remove('modal-open')
    })
})

const regButton = document.querySelector('.n-one')

const loginButton = document.querySelector('.log')

regButton.addEventListener('click', showRegModal)
loginButton.addEventListener('click', showLoginModal)
