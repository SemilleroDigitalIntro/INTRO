let Promo_img2 = document.getElementById("Promo-img2");
Promo_img2.style.background = `url(https://cdn.tictuk.com/1697916718584870/banner_desktop_d9c49797-1b23-5406-97ad-b106f0e6a479.jpeg?a=0e2db22c-3d35-0dd2-8ca4-f38f25c900b7)`;


var Promo_img = document.getElementById("Promo-img");
var click1 = 1;

let Promo_img_btn = document.getElementById("Promo-img-btn");
Promo_img_btn.addEventListener("click",
    function(){
                    Promo_img.style.display = "none";
                    Promo_img2.style.display = "flex";
              
        }
)
let Promo_img_btn2 = document.getElementById("Promo-img-btn2");
Promo_img_btn2.addEventListener("click",
    function(){
        Promo_img.style.display = "flex";
        Promo_img2.style.display = "none";
    }
)
let Promo_img_btn3 = document.getElementById("Promo-img-btn3");
Promo_img_btn3.addEventListener("click",
    function(){
        Promo_img.style.display = "flex";
        Promo_img2.style.display = "none";
    }
)
let Promo_img_btn4 = document.getElementById("Promo-img-btn4");
Promo_img_btn4.addEventListener("click",
    function(){
        Promo_img.style.display = "none";
        Promo_img2.style.display = "flex";
    }
)