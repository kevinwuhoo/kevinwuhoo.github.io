var generateTriangles = function(opts) {
  args = {
    size: opts.size || 25,
    height: opts.height || window.height,
    randomStart: false || opts.randomStart
  }

  if(opts.colors == 'random') {
    args['colors'] = randomColor({count: 20, luminosity: 'light'})
  } else if(opts.colors == 'monochrome') {
    args['colors'] = ["#f3f3f3", "#f0f0f0", "#ebebeb", "#e6e6e6", "#e2e2e2"]
  } else if(opts.colors == 'patterned') {
    schemeName = _.sample(_.keys(chroma.brewer))
    args['coloringFunction'] = _.curry(_.sample(_.values(patterns)))(
      chroma.scale(schemeName).padding([0.2, 0.6]).colors(5),
      ['#fff']
    )
  }
  return $(tessellate(args))
}

var backgroundTriangles = function(color) {
  $('.hero-logo__background').remove()

  var triangles = generateTriangles({
    randomStart: true,
    colors: color
  }).addClass('hero-logo__background')

  $('.js-hero-background').append(triangles);
}

var hrTriangles = function(color) {
  $('.triangle-hr').remove()

  $('.js-triangle-hr').each(function(i, el) {
    var triangleHr = generateTriangles({
      size: 10,
      height: 10,
      colors: color
    }).addClass('triangle-hr')

    $(el).append(triangleHr)
  });
}

var colored = false
var trianglize = function() {
  if(!colored)
    backgroundTriangles('patterned')

  hrTriangles('random')

  colored = true
  $('.js-logo-scroll').addClass('logo__initials_scroll')

  // add the class that changes the initials to an outline
  // and pattern the hero graphic during scroll and resize,
  // reset with a setTimeout
  clearTimeout($.data(this, 'scrollTimer'));

  // restore triangle color and outline logo when scroll finish
  $.data(this, 'scrollTimer', setTimeout(function() {
    colored = false
    backgroundTriangles('monochrome')
    hrTriangles('monochrome')
    $('.js-logo-scroll').removeClass('logo__initials_scroll')
  }, 100));
}

$(window).resize(trianglize)
$(window).scroll(trianglize)

$(document).ready(function() {

  // initialize triangles
  backgroundTriangles('monochrome')
  hrTriangles('monochrome')

  // when hero is clicked, scroll to start of content
  $('.js-hero-background').click(function() {
    $('html, body').animate({
      scrollTop: $(".js-content-start").offset().top
    }, 1500);
  })
})
