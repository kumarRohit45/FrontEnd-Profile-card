const btn = document.querySelector('.modal');
const overlay= document.querySelector('.overlay');

function modalOpen(){
btn.classList.add('active');
overlay.classList.add('overlay-active')

}

function modalClose(){
    btn.classList.remove('active');
    overlay.classList.remove('overlay-active');
}



