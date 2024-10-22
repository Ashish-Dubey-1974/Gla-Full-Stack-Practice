var imgs=document.querySelectorAll('.slider img');
var dots=document.querySelectorAll('.dot');
var currentImg=0;
const interval=3000;

function changeImage(n){
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.opacity=0;
        dots[i].className=dots[i].className.replace('active','');
    }
    currentImg=n;
    imgs[currentImg].style.opacity=1;
    dots[currentImg].className+=' active';
}
var timer=setInterval(function(){
    changeImage((currentImg+1)%imgs.length);
},interval);

function resetTimer(){
    clearInterval(timer);
    timer=setInterval(function(){
        changeImage((currentImg+1)%imgs.length);
    },interval);
}

function changeImageManually(n){
    if(n!=undefined){
        changeImage(n);
        resetTimer();
    }
}

changeImage(0);