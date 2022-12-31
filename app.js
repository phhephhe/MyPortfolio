let lightMode = document.getElementById('lightMode');
let body = document.querySelector('body');
let night = document.getElementById('night');
let day = document.getElementById('day')
night.addEventListener('click', () =>{
        body.classList.toggle('dark-mode')
        night.style.display = 'none'
        day.style.display = 'block'
})
day.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode')
    day.style.display = 'none'
    night.style.display = 'block'
})