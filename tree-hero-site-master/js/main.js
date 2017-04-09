$('.map-buttons area').click( function() {
  $( $(this).attr('href') ).fadeIn(750);
});

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
