// Button light & Dark
let Dark =document.getElementById('Dark');
let light=document.getElementById('light');
let thead=document.getElementById('thead');
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
let title=document.getElementById('title');
let price=document.getElementById('Price');
let taxes=document.getElementById('taxes');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let cReate=document.getElementById('create');
let Search=document.getElementById('Search');
let search_title=document.getElementById('search title');
let search_category=document.getElementById('search category');
let mood='cReate';
let temp;
//Get total
function getTotal(){
    if(price.value !=''){
        let resulte=(+price.value + +taxes.value) - +discount.value;
        total.innerHTML=resulte;
        total.style.background='green'
    }
    else{
        total.innerHTML='';
        total.style.background='red';
    }
}
// create product
let datapro;
if(localStorage.product != null){
    datapro=JSON.parse(localStorage.product)
}
else{
    datapro=[];
}
cReate.onclick=function(){
let newpro={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
}
//count
if(title.value !='' && price.value !='' && category.value !='' && newpro.count<101)//clean data
{
    if(mood ==='cReate'){
       if(newpro.count>1){
            for(i=0;i<newpro.count;i++){
                datapro.push(newpro);
            }
        }
        else{
            datapro.push(newpro);
        }
    }
    else{
     datapro[temp]=newpro;
     mood='create';
     cReate.innerHTML='Create'
     count.style.display='block';
    }
}
// save in local storage
localStorage.setItem('product',JSON.stringify(datapro));
clearData()
showData()
}
// clear inputs
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}
// Read 
function showData()
{
    let table='';
    for(let i=0;i<datapro.length;i++){
        table +=`
        <tr>
        <td>${i+1}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick="updataData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML=table;
        //deleta All
    let DeleteAll=document.getElementById('Delete');
    if(datapro.length>0){
        DeleteAll.innerHTML=`
        <button onclick="delete_all()">delete All</button>
        `
    }
    else{
        DeleteAll.innerHTML='';
    }
}
showData()
//delete
function deleteData(i)
{
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);
    showData()
}
 //deleta All
function delete_all(){
    datapro.splice(0);
    localStorage.clear();
     showData()
}
//update
function updataData(i){
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxes.value=datapro[i].taxes;
    discount.value=datapro[i].discount;
    getTotal()
    count.style.display='none';
    category.value=datapro[i].category;
    cReate.innerHTML='Update';
    mood='Update'
    temp=i;
    scroll({
        top:0,
        behavior:"smooth",
    })
}
//search
let searchMoood = 'title';
function getSearchMood(id)
{
    let search=document.getElementById('Search');
    if(id == 'searchTitle'){
        searchMoood = 'title';
        search.placeholder='Search By Title';
    }else{
        searchMoood='category';
        search.placeholder='Search By Catagory';
    }
search.focus();
search.value='';
showData();
}
function searchData(value){
    let table='';
    if(searchMoood == 'title'){
        for(let i=0;i<datapro.length;i++){
            if(datapro[i].title.toLowerCase().includes(value.toLowerCase())){
                table +=`
              <tr>
              <td>${i+1}</td>
              <td>${datapro[i].title}</td>
              <td>${datapro[i].price}</td>
              <td>${datapro[i].taxes}</td>
              <td>${datapro[i].discount}</td>
              <td>${datapro[i].total}</td>
              <td>${datapro[i].category}</td>
              <td><button onclick="updataData(${i})" id="update">update</button></td>
              <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
              `
            }
        }
           
    }else{
         for(let i=0;i<datapro.length;i++){
            if(datapro[i].category.toLowerCase().includes(value.toLowerCase())){
                table +=`
              <tr>
              <td>${i+1}</td>
              <td>${datapro[i].title}</td>
              <td>${datapro[i].price}</td>
              <td>${datapro[i].taxes}</td>
              <td>${datapro[i].discount}</td>
              <td>${datapro[i].total}</td>
              <td>${datapro[i].category}</td>
              <td><button onclick="updataData(${i})" id="update">update</button></td>
              <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
              `
            }
        }
    }
    document.getElementById('tbody').innerHTML=table;
}
//login
if(!localStorage.getItem('loggedIn') ){
    window.location.href='practice.html';
}
//log out
function loggedout(){
    localStorage.removeItem('loggedIn');
    window.location.href='practice.html';
}
//game X or o
 let titel2=document.querySelector('.titel2')
 let turn='X';
 let squares=[];
 function end(num1,num2,num3)
 {
    titel2.innerHTML=`${squares[num1]} winnner`;
    document.getElementById('item'+num1).style.background="Green";
    document.getElementById('item'+num2).style.background="Green";
    document.getElementById('item'+num3).style.background="Green";
    
    setInterval(function(){titel2.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},4000);
 }
 function winnnner()
{
 for(let i=1 ; i<10 ;i++)
{
 squares[i]= document.getElementById('item' + i).innerHTML;
}
 if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!='')
 {
    end(1,2,3);
 }
 else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!='')
 {
    end(4,5,6);
}
 else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[8]!='')
 {
    end(7,8,9);
}
else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!='')
{
    end(1,4,7);
}
else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[5]!='')
{
    end(2,5,8);
}
else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!='')
{
    end(3,6,9);
}
else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!='')
{
    end(1,5,9);
}
else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[5]!='')
{
    end(3,5,7);
}
}
 function game(id)
{
let element=document.getElementById(id);
if(turn ==='X' && element.innerHTML == '' )
{
    element.innerHTML='X'; 
    turn='O';
    titel2.innerHTML="O";
}
else if(turn ==='O' && element.innerHTML == '' )
{
    element.innerHTML='O'; 
    turn='X';
    titel2.innerHTML="X";
}
winnnner();
}


