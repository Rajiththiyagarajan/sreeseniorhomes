$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        dots: true,
        lazyLoad: true, 
        responsive: {
            0: {
                items: 1,
                dots: false 
            },
            600: {
                items: 3,
                dots: true
            },
            1000: {
                items: 6,
                dots: true
            }
        },
        navText: ["<span class='bi bi-chevron-left'></span>", "<span class='bi bi-chevron-right'></span>"]
    });
});

$(function() {
    $('.owl-carousel .item img').lazy();
});
