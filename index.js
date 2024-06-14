//let body = document.body;
//const button = document.querySelector('.bttn')

//changemode (()=> {
//button.addEventListener('click',() =>{
//    body.classList.toggle("white-theme");
//    if (button.innerHTML == 'Darkmode') {
//        button.innerHTML = 'whitemode';
//    } else {
//        button.innerHTML = 'Darkmode';
//    }
//}
//)});



var body = document.querySelector('body');
var btn = document.querySelector('.bttn');
var img = document.querySelector('.home-img');
var about = document.querySelector('.about-info');
var nav = document.querySelector('.navbar');
var links = document.querySelectorAll('.link');
var texts = document.querySelectorAll('.text');
var icons = document.querySelectorAll('.icon');

var icon_8 = document.querySelector('.icons-8');

var inputs = document.querySelectorAll('input');
var textarea = document.querySelector('textarea');

var texts_1 = document.querySelectorAll('.text-8');




function darkmode() {
    
    body.style.background = 'black';
    body.style.color = 'white';
    btn.style.color = 'white';
    img.style.opacity = '1';
    about.style.opacity = '0.6';
    nav.style.background = '#000';
    links.forEach( link=> {
        link.style.opacity = '0.5';
      link.style.color = 'white';
    });
    texts.forEach(text => {
        text.style.opacity = '0.6';
        text.style.color = 'whitesmoke';
        
    });

    texts_1.forEach(text => {
        text.style.opacity = '0.6';
        text.style.color = 'whitesmoke';
        
    });
    
    icons.forEach(icon => {
        icon.style.color = 'white';
    });
    
    icon_8.style.fill = '';
    
    
    
    
};

function lightmode() {
    body.style.background = 'white';
    body.style.color = 'black';
    btn.style.color = 'black';
    img.style.opacity = '1';
    about.style.opacity = '1';
    nav.style.background = '#fff';
    links.forEach( link=> {
        link.style.opacity = '1';
      link.style.color = 'black';
    });
    texts.forEach(text => {
        text.style.opacity = '1';
        text.style.color = 'black';
        
    });

    texts_1.forEach(text => {
        text.style.opacity = '1';
        text.style.color = 'black';
        
    });
    
    
    icons.forEach(icon => {
        icon.style.color = 'black';
    });
    
    icon_8.style.color = 'black';
    
    
   
};

function changeMode(){
    if (body.style.color = 'white') {
        lightmode()
    } else {
        darkmode()
    };
};


