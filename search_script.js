$(document).ready(function() {
    function checkWidth() {
        var windowSize = window.matchMedia('(min-width: 768px)');

        if (windowSize.matches) {
            // If media query matches
            $('.Search').hover(
                function(){ // Mouse over
                    $('.Actions').css('grid-template-columns', '1fr 0fr 0fr');
                    $('.Bag, .Account, .Searchicon').css('opacity', '0'); // Make other grid items invisible
                    setTimeout(function() {
                    $('.Bag, .Account').css('display', 'none');
                    $('.Searchbar).css('display', 'block');
                    }, 600);
                },
                function(){ // Mouse out
                    $('.Bag, .Account').css('display', ''); // Reset to original
                    $('.Actions').css('grid-template-columns', ''); // Reset to original
                    $('.Bag, .Account, .Searchicon').css('opacity', '1'); // Make other grid items visible
                    $('.Searchbar).css('display', 'none');
                }
            );
        } else {
            // Remove hover effects for smaller screens
            $('.Search').off('mouseenter mouseleave');
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});
