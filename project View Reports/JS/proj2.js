// Button light & Dark
let Dark =document.getElementById('Dark');
let light=document.getElementById('light');
let scro=document.getElementById('scro');
let logout=document.getElementById('logout');
Dark.onclick=function(){
    document.body.style.background='black';
    Dark.classList.add('hide');
    light.classList.remove('hide');
    thead.style.color='white';
    tbody.style.color='white';
}
light.onclick=function(){
    document.body.style.background='white';
    Dark.classList.remove('hide');
    light.classList.add('hide');
    thead.style.color='Black';
    tbody.style.color='Black';
}
//Scroll
onscroll=function(){
    if(scrollY>200){
        scro.style.display='block'
    }
    else{
        scro.style.display='none'
    }
}
scro.onclick=function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
//Report
function showReport(reportNumber) {
    let pdfPath = "";

    switch(reportNumber) {
        case 1:
            pdfPath = "pdfs/report1.pdf";
            break;
        case 2:
            pdfPath = "pdfs/report2.pdf";
            break;
        case 3:
            pdfPath = "pdfs/report3.pdf";
            break;
        case 4:
            pdfPath = "pdfs/report4.pdf";
            break;
        case 5:
            pdfPath = "pdfs/report5.pdf";
            break;
    }

    const reportArea = document.getElementById("reportArea");
    reportArea.innerHTML = `<iframe src="${pdfPath}" frameborder="0"></iframe>`;
}


//login
if(!localStorage.getItem('loggedIn') ){
    window.location.href='Login.html';
}
//log out
function loggedout(){
    localStorage.removeItem('loggedIn');
    window.location.href='Login.html';
}


