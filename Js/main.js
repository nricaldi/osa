// js to change the background of the navbar

window.addEventListener('scroll', changeBackground);

function changeBackground(){

    let nav = document.querySelector('#nav-bar');
    let w = window.innerWidth;
    let y = window.pageYOffset;

    if(w > 760){
        if (y > 50){
            nav.classList += ' scroll-bg';
        } else if(y < 50){
            nav.classList = ' main-header';
        }
    }
}