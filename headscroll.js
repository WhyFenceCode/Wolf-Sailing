$(window).scroll(function() {
    if ($(this).scrollTop() > 0) { // if page is scrolled down
        $('.header').addClass('scrolled');
    } else { // if page is at the top
        $('.header').removeClass('scrolled');
    }
});
