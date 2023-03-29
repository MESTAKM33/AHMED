const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');
    bar.onclick = function() {
     nav.classList.toggle('active')
}
if (close){
    close.addEventListener ('click', () =>{
        nav.classList.remove('active');
    })
}