$(document).ready(function() {
    function checkWidth() {
        var windowSize = window.matchMedia('(min-width: 768px)');

        if (windowSize.matches) {
            // If media query matches
            $('.Search').hover(
                function(){ // Mouse over
                    $('.Actions').css('grid-template-columns', '5fr 0fr 0fr');
                },
                function(){ // Mouse out
                    $('.Actions').css('grid-template-columns', ''); // Reset to original
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
