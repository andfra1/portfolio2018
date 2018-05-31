$('.header__itemsBoxLink').click(function () {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top-75
  }, 500);
});