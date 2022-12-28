let lightMode = document.getElementById('lightMode');
let body = document.querySelector('body');
let img = document.getElementById('light');
console.log(img.src)
img.addEventListener('click', function (){
    console.log(this.src)
        body.classList.toggle('dark-mode')
        img.classList.toggle('')
})