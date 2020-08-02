$(document).ready(function(){
    
    var headerHeight = $('#nav-bar').outerHeight();

    $('.smooth-scroll').click(function(e){

        let linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000)

        e.preventDefault();
    })
})


$('.menu-toggle').click(function(){

    $('.site-nav').toggleClass('site-nav--open',500);
    $(this).toggleClass('open');
});