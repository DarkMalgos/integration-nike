/*============================================================
#title            : Exercise 6: INTGRATION NIKE
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : SAUMUROT Florian
#date             : 20161212
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : Only working on search engine
=============================================================*/


var h = document.getElementById("heart"),
    fav = false,
    pl = document.getElementById("product-left"),
    sp = document.getElementById("shoe-pannel"),
    cs = document.getElementById("m1"),
    ucs = document.getElementById("m2"),
    body = document.getElementsByTagName("body")[0],
    fp = document.getElementById("fix-pannel");

function check_fav() {
    if (fav == true) {
        fav = false;
        h.setAttribute('src', "images/heart-1.png");
    }
    else {
        fav = true;
        h.setAttribute('src', "images/heart-2.png");
    }
}

h.addEventListener('click', check_fav);

function go_colored_shoes(){
    pl.style.background = "url('images/top-background-1.png')";
    sp.style.background = "url('images/top-background-1.png')";
    sp.style.backgroundSize = "100% 100%";
}

cs.addEventListener('click', go_colored_shoes);

function go_uncolored_shoes(){
    pl.style.background = "url('images/top-background-2.png')";
    sp.style.background = "url('images/top-background-2.png')";
        sp.style.backgroundSize = "100% 100%";
}

ucs.addEventListener('click', go_uncolored_shoes);

window.onscroll = function(){
    if (document.body.scrollTop >= 0 && document.body.scrollTop < 690){
        fp.style.position = "absolute";
        fp.style.top = "800px";
    }   
    else if (document.body.scrollTop >= 690 && document.body.scrollTop <= 1400){
        fp.style.position = "fixed";
        fp.style.top = "118px";
        console.log(body.scrollTop);
    }
    else if (document.body.scrollTop > 1400){
        fp.style.position = "absolute";
        fp.style.top = "1500px"; 
    }
        
}





