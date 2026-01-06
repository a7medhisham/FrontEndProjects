let km = document.getElementById('km');
let kb = document.getElementById('kb');
let Dark =document.getElementById('Dark');
let light=document.getElementById('light');
Dark.onclick=function(){
    document.body.style.background='black';
    Dark.classList.add('hide');
    light.classList.remove('hide');
    container.style.background="black";
}
light.onclick=function(){
    document.body.style.background='white';
    Dark.classList.remove('hide');
    light.classList.add('hide');
    container.style.background="white";
}
click.onclick = function () {
    let km = document.getElementById('km').value;
    let kb = document.getElementById('kb').value;
    if (km == 'ahmed@gmail.com' && kb == '4220008') {
        localStorage.setItem('loggedIn','true');
        window.location.href ="Reports.html";
    }
    else if(km=='Saad@gmail.com' && kb=='422'){
        localStorage.setItem('loggedIn','true');
        window.location.href ="Reports.html";
        location.href ="Reports.html";
    }
    else if(km=='kimo@gmail.com' && kb=='421'){
        localStorage.setItem('loggedIn','true');
        window.location.href ="Reports.html";
        location.href = "Reports.html";
    }
    else if(km=='Younes@gmail.com' && kb=='423'){
        localStorage.setItem('loggedIn','true');
        window.location.href ="Reports.html";
        location.href = "Reports.html";
    }
    else if(km=='Ayman@gmail.com' && kb=='424'){
        localStorage.setItem('loggedIn','true');
        window.location.href ="Reports.html";
        location.href = "Reports.html";
    }
    else if(km=='Moshira@gmail.com' && kb=='Moshira_123'){
        localStorage.setItem('loggedIn','true');
        window.location.href ="Reports.html";
        location.href = "Reports.html";
    }
    else{
        window.alert('Try again please');
    }
};

