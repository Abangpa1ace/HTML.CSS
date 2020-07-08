const togglebtn = document.querySelector('.toolbar');
const menu = document.querySelector('.menu');
const sns = document.querySelector('.sns');

togglebtn.addEvenelistener('click', ()=>{
    menu.classList.toggle('active');
    sns.classList.toggle('active');
});