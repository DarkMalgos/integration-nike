/*============================================================
#title            : Exercise 6: INTGRATION NIKE
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : SAUMUROT Florian
#date             : 20161212
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : Only working on search engine
=============================================================*/

var body = document.getElementsByTagName("body")[0],
    zf = document.getElementById("fix-pannel");

window.onscroll = function(){
    if (document.body.scrollTop < 690){
        zf.style.position = "absolute";
        zf.style.top = "800px";
    }   
    else if (document.body.scrollTop >= 690 && document.body.scrollTop <= 1400){
        zf.style.position = "fixed";
        zf.style.top = "118px";
        console.log(body.scrollTop);
    }
    else if (document.body.scrollTop > 1400){
        zf.style.position = "absolute";
        zf.style.top = "1500px"; 
    }
        
}
/*while ((zf.scrollTop >= ) && ( zf.scrollTop <= )){
    zf.style.display = none;
}*/

