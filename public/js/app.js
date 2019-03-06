/*--------------------------------carousel header and cards---------------------------  */
$(document).ready(function () {


    $('.slickslider').slick({
        dots: true,
        slidesToShow: 1,
        //autoplay:true,
        prevArrow: false,
        nextArrow: false,
        draggable: true,
        autoplaySpeed: 3000,
        infinite: true,
    });
    $('.slickslider2').slick({
        slidesToShow: 3,
        autoplay: true,
        draggable: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [{
                breakpoint: 825,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });
});

/*-------------------------------- simple dropdawn---------------------------  */
let elemDrop1 = document.getElementById("dropdown1");
let elemDropShow = document.getElementsByClassName("dropdown1Inner")[0];
let header = document.getElementsByClassName("header_menu")[0];

let elemDrop2 = document.getElementById("dropdown2");
let elemDropShow2 = document.getElementsByClassName("dropdown2Inner")[0];


elemDrop1.addEventListener("click", myFunction)
header.addEventListener("mouseleave", myFunctionDelete)

function myFunction() {
    elemDropShow.classList.toggle("show1");
}

function myFunctionDelete() {
    elemDropShow.classList.remove("show1");
}


elemDrop2.addEventListener("click", myFunction2)
header.addEventListener("mouseleave", myFunctionDelete2)

function myFunction2() {
    elemDropShow2.classList.toggle("show2");
}

function myFunctionDelete2() {
    elemDropShow2.classList.remove("show2");
}

//burger menu
function burger() {

    document.getElementById("open").style.width = "100%";
}

function closeBurger() {

    document.getElementById("open").style.width = "0";
}
