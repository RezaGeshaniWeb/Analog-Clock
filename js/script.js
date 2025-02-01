// clock
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const seconds = document.getElementById('seconds')

setInterval(() => {
    let time = new Date()

    let h = time.getHours() * 30
    let m = time.getMinutes() * 6
    let s = time.getSeconds() * 6

    hour.style.transform = `rotateZ(${h + m / 12}deg)`
    minute.style.transform = `rotateZ(${m}deg)`
    seconds.style.transform = `rotateZ(${s}deg)`
}, 1000)
// clock


// dark mode
const darkModeBtn = document.getElementById('dark-mode')
const main = document.getElementById('main')
const clock = document.getElementById('clock')

// onload
document.addEventListener('DOMContentLoaded', () => {
    let darkmode = JSON.parse(localStorage.getItem('theme'))
    if (darkmode === 'dark') {
        main.classList.add('darkmode')
        darkModeBtn.innerText = 'Dark'
        darkModeBtn.dataset.theme = 'dark'
    }
})
// onload

darkModeBtn.addEventListener('click', () => {
    if (darkModeBtn.dataset.theme === 'light') {
        main.classList.add('darkmode')
        darkModeBtn.innerText = 'Dark'
        darkModeBtn.dataset.theme = 'dark'
        localStorage.setItem('theme', JSON.stringify('dark'))
    } else {
        main.classList.remove('darkmode')
        darkModeBtn.innerText = 'Light'
        darkModeBtn.dataset.theme = 'light'
        localStorage.setItem('theme', JSON.stringify('light'))
    }
})
// dark mode