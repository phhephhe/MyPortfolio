let lightMode = document.getElementById('lightMode');
let body = document.getElementsByTagName("BODY")[0];
let btn = document.getElementById('light');

btn.addEventListener('click', (el) =>{
    el.preventDefault()
    if(lightMode.content == "light"){
        lightMode.content = "dark";
        btn.innerHTML = "Day"
        body.style.color = 'white'
    }else{
        lightMode.content = "light"
        btn.innerHTML = "Night"   
        body.style.color = '#4F4F4F'
    }
})