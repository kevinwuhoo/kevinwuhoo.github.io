//= require "tessellate/tessellate.js"
//= require "randomcolor/randomColor.js"

var generateTriangles = function(opts) {

  args = {
    size: opts.size || 25,
    height: opts.height || window.height,
    width: opts.width || window.width,
    randomStart: false || opts.randomStart
  }

  if(opts.randomColors)
    args['colors'] = randomColor({count: 20, luminosity: 'light'})
  else
    args['colors'] = ["#f3f3f3", "#f0f0f0", "#ebebeb", "#e6e6e6", "#e2e2e2"]

  return $(tessellate(args))

}

var trianglize = function(opts) {

  opts = opts || {}

  $('.landing-background').remove()
  landingOpts = $.extend({
    randomStart: true,
    width: window.width * 0.75,
    height: window.height * 0.75}
  , opts)

  var triangles = generateTriangles(landingOpts).addClass('landing-background')
  $('.js-landing-background').append(triangles);
  triangles = null

  $('.triangle-hr').remove()
  var hrOpts = $.extend({size: 10, height: 10}, opts)
  $('.js-triangle-hr').each(function(i, el) {
    var triangleHr = generateTriangles(hrOpts).addClass('triangle-hr')
    $(el).append(triangleHr)
    triangleHr = null
  });
}

$(window).resize(function() {
  trianglize()
})

$(window).scroll(function() {
  trianglize({randomColors: true})
  $('.js-logo-scroll').addClass('logo-scroll')

  // add the 'logo-scroll' class that changes the initials to an outline
  // during scroll, remove with a setTimeout
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
    // restore triangle color and outline logo when scroll finish
    trianglize()
    $('.js-logo-scroll').removeClass('logo-scroll')
  }, 100));
});

$(document).ready(function() {

  // initialize triangles
  trianglize()

  // when landing is clicked, scroll to start of content
  $('.js-triangles').click(function() {
    $('html, body').animate({
      scrollTop: $(".js-content-start").offset().top
    }, 1500);
  })
})
