$('.Search').hover(
  function(){ // Mouse over
    $('.Actions').css('grid-template-columns', '1fr 0fr 0fr');
  },
  function(){ // Mouse out
    $('.Actions').css('grid-template-columns', ''); // Reset to original
});
