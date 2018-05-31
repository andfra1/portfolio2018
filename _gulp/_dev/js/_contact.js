$('#contact > .wrapper').height($('#contact').outerHeight(true)-100);

$(window).on('resize', function () {
  $('#contact > .wrapper').height($('#contact').outerHeight(true)-150);
})
