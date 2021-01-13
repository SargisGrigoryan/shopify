$(function(){
    // Owl carousel
    $(".owl-carousel").owlCarousel({
        'loop': true,
        responsive:{
            0:{
                items: 1,
            },
            576:{
                items: 2,
            },
            992:{
                items: 3
            },
            1300:{
                items: 4
            },
            1600:{
                items: 5
            },
        },
    });
});