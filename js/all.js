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

$(document).mouseup(function(e) 
{
var container = $(".nav-area");
// if the target of the click isn't the container nor a descendant of the container
if (!container.is(e.target) && container.has(e.target).length === 0) 
{
    $('body').removeClass('toggleNav');
    if (width < 992){
        $('.body-container').removeClass('overlay');
    }
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
    $('.body-container').removeClass('overlay');
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
$(document).mouseup(function(e) 
{
    var containerPopup = $(".portfolio__items--popup-inner");
    // if the target of the click isn't the container nor a descendant of the container
    if (!containerPopup.is(e.target) && containerPopup.has(e.target).length === 0) 
    {
        $(containerPopup).parent().parent().fadeOut();
        $('body').removeClass('body-overflow');
    }
});
});