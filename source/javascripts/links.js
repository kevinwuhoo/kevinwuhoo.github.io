// anchor tag hover random color
$(document).ready(function() {
  var anchorHoverIntervalId = null;
  $('a').hover(function() {
    var $hoveredLink = $(this)
    anchorHoverIntervalId = setInterval(function() {
      $hoveredLink.css('color', randomColor({luminosity: 'dark'}))
    }, 100)
  }, function() {
    $(this).css('color', '#333')
    clearInterval(anchorHoverIntervalId)
    anchorHoverIntervalId = null;
  })
})
