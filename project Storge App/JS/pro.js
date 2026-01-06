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
let image=document.getElementById("image");
let images=["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg"];
setInterval(function(){
    let ren=Math.floor(Math.random()*images.length);
    image.src=images[ren];
},800);
click.onclick = function () {
    let km = document.getElementById('km').value;
    let kb = document.getElementById('kb').value;
    if (km == 'ahmed@gmail.com' && kb == 4220008) {
        localStorage.setItem('loggedIn','true');
        window.location.href ="proj.html";
    }
    else if(km=='Saad@gmail.com' && kb==422){
        location.href ="page Zamzon ''_''/HL.html";
    }
    else if(km=='hisham@gmail.com' && kb==421){
        location.href = "page Zamzon ''_''/HL.html";
    }
    else{
        window.alert('Try again please');
    }
};

