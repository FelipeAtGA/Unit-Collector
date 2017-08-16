// from: http://api.jquery.com/animate/

$('a').click(function() {
  $(this).animate({
    position: 'absolute',
    width: '1000px',
    height: '1000px'
  }, 100, function() {
    window.location.href = 'js/game.html';
  });
});
