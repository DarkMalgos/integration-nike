/*============================================================
#title            : Exercise 6: INTGRATION NIKE
#description      : integration with HTML/CSS/JAVASCRIPT
#author           : SAUMUROT Florian
#date             : 20161212
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : Only working on search engine
=============================================================*/


var cookie_cart = getCookie("cart"),
    cookie_fav = getCookie("fav"),
    h = document.getElementById("heart"),
    fav = false,
    pl = document.getElementById("product-left"),
    sp = document.getElementById("shoe-pannel"),
    c = document.getElementById("caract"),
    cs = document.getElementById("m1"),
    ucs = document.getElementById("m2"),
    nb_cart = 0,
    cart = document.getElementById("cart"),
    add1 = document.getElementById("add1"),
    add2 = document.getElementById("add2"),
    body = document.getElementsByTagName("body")[0],
    fp = document.getElementById("fix-pannel");

if (cookie_cart != null){
    add_remove_to_cart();
}

if (cookie_fav != null){
    check_fav();
}

function check_fav() {
    if (fav == true) {
        fav = false;
        h.setAttribute('src', "images/heart-1.png");
        eraseCookie("fav");
    } else {
        setCookie("fav", "true", 30);
        fav = true;
        h.setAttribute('src', "images/heart-2.png");
        setCookie("fav", "true", 30);
    }
}

h.addEventListener('click', check_fav);

function go_colored_shoes(){
    pl.style.background = "url('images/top-background-1.png')";
    c.style.background = "url('images/shoes.png')";
    sp.style.background = "url('images/top-background-1.png')";
    sp.style.backgroundSize = "100% 100%";
}

cs.addEventListener('click', go_colored_shoes);

function go_uncolored_shoes(){
    pl.style.background = "url('images/top-background-2.png')";
    c.style.background = "url('images/shoes2.png')";
    sp.style.background = "url('images/top-background-2.png')";
        sp.style.backgroundSize = "100% 100%";
}

ucs.addEventListener('click', go_uncolored_shoes);

function add_remove_to_cart() {
    if (add1.innerHTML == "ADD TO CART") {
        ++nb_cart;
        add1.innerHTML = "REMOVE TO CART";
        add2.innerHTML = add1.innerHTML;
        cart.innerHTML = nb_cart;
        setCookie("cart", nb_cart, 30);
    } else {
        --nb_cart;
        add1.innerHTML = "ADD TO CART";
        add2.innerHTML = add1.innerHTML;
        cart.innerHTML = nb_cart;
        eraseCookie("cart");
    }
}

add1.addEventListener('click', add_remove_to_cart);
add2.addEventListener('click', add_remove_to_cart);

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

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });