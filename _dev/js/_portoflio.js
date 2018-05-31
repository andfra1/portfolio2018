var slide = $('.slider__slide');
var i = 0;

$('#slider').height($('#projects').outerHeight() - 124 - $('#projects>.wrapper>h1').outerHeight(true));
$(window).on('resize', function () {
  $('#slider').height($('#projects').outerHeight() - 124 - $('#projects>.wrapper>h1').outerHeight(true));
})

$('#slider').click(function () {
  if (i < slide.length - 1) {
    slide.eq(i).addClass('slider__slide--rollup');
    i++;
    slide.eq(i).removeClass('slider__slide--rollup');
  } else {
    i = 0;
    slide.removeClass('slider__slide--rollup')
  }
});

var zIndex = $('.slider__slideContentText').length + 2;
for (var index = 0; index < $('.slider__slideContentText').length; index++) {
  zIndex--;
  $('.slider__slideContentText').eq(index).css("z-index", zIndex);
}

var zIndex = $('.slider__slideContentImg').length;
for (var index = 0; index < $('.slider__slideContentImg').length; index++) {
  zIndex--;
  $('.slider__slideContentImg').eq(index).css("z-index", zIndex);
}