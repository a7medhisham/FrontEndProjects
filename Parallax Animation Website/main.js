let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('img3');
let mountains4 = document.getElementById('img4'); 
let street5 = document.getElementById('img5');
let car6 = document.getElementById('img6');
let mountains7 = document.getElementById('img7');
let ah = document.querySelector('.AH');
window.onscroll = function () {
    let value = scrollY;
    stars.style.right = value + 'px';
    moon.style.top = value * 5 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    street5.style.top = value + 'px';
    car6.style.top = value + 'px';
    car6.style.right = value * 3 + 'px';
    ah.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        ah.style.fontSize = 67 + 'px';
        ah.style.position = 'fixed';
        if (scrollY >= 478) {
            ah.style.display = 'none';
        } else {
            ah.style.display = 'block';
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
}