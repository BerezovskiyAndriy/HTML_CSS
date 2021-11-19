$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        speed: 1000,
        autoplay: true,
        draggable: false,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    autoplay: false
                }
            }
        ]
    });
    $('.products__slider').slick({
        slidesToShow: 3,
        draggable: false,
        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings:{
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    slidesToShow: 1,
                    autoplay: true
                }
            }
        ]
    });
});

