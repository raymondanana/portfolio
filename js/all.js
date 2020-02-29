// nav Toggle
$( document ).ready(function() {
var navToggle = $('.nav-area__toggle'),
    width = $(window).width();


navToggle.on('click', function(){
    $('body').toggleClass('toggleNav');
    if (width < 992){
        $('.body-container').addClass('overlay');
    }
});
$('.nav-area__toggle--close').on('click', function(){
    $('body').removeClass('toggleNav');
    if (width < 992){
        $('.body-container').removeClass('overlay');
    }
});


// Anchor
$('.nav-area__list li a[href*="#"]').on('click', function (event) {

    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    if (width < 992){
        $('body').removeClass('toggleNav');
    }
});

// Pop Up
 $('.portfolio__toggle').on('click', function(){
    $(this).next().fadeIn();
    $('body').addClass('body-overflow');
 });
 $('.popup-close').on('click', function(){
    $(this).parent().parent().parent().fadeOut();
    $('body').removeClass('body-overflow');
 });

});