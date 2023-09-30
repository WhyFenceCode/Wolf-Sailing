$(document).ready(function() {
    function checkWidth() {
        var windowSize = window.matchMedia('(min-width: 768px)');

        if (windowSize.matches) {
            // If media query matches
            $('.Search').hover(
                function(){ // Mouse over
                    $('.Actions').css('grid-template-columns', '1fr 0fr 0fr');
                    $('.Bag, .Accounts').css('opacity', '0'); // Make other grid items invisible
                },
                function(){ // Mouse out
                    $('.Actions').css('grid-template-columns', ''); // Reset to original
                    $('.Bag, .Accounts').css('opacity', '1'); // Make other grid items visible
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
