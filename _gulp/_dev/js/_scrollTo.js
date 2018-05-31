$('.header__itemsBoxLink').click(function () {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - $('.header').outerHeight()
  }, 500);
});

$(window).scroll(function () {
  var s = $(this).scrollTop();
  var wh = window.innerHeight;
  //console.log(wh);

  if (s > $('.projects').offset().top - wh * 3 / 4) {
    $('.projects__header').addClass('onScrollShow bounceInLeft');
  } else if (s < $('.projects').offset().top - wh + 10) {
    $('.projects__header').removeClass('onScrollShow bounceInLeft');
  }

  if (s > $('.contact').offset().top - wh * 3 / 4) {
    $('.contact__header').addClass('onScrollShow bounceInLeft');
  } else if (s < $('.contact').offset().top - wh + 10) {
    $('.contact__header').removeClass('onScrollShow bounceInLeft');
  }

  if (s > $('.slider__slideContentText').offset().top - wh) {
    $('.slider__slideContentText').addClass('onScrollShow');
  } else if (s < $('.slider__slideContentText').offset().top - wh) {
    $('.slider__slideContentText').removeClass('onScrollShow');
  }

  if (s > $('.slider__slideContentImg').offset().top - wh) {
    $('.slider__slideContentImg').addClass('onScrollShow');
  } else if (s < $('.slider__slideContentImg').offset().top - wh) {
    $('.slider__slideContentImg').removeClass('onScrollShow');
  }

  if (s > $('.contact__content').offset().top - wh / 2) {
    $('.contact__contentData').addClass('onScrollShow');
    $('.contact__contentQrcode').addClass('onScrollShow');
  } else if (s < $('.contact__content').offset().top - wh) {
    $('.contact__contentData').removeClass('onScrollShow');
    $('.contact__contentQrcode').removeClass('onScrollShow');
  }

  var liCounter = -1;
  if (s > $('.footer__bottomSide').offset().top - wh - 10) {

    var socialInterval = setInterval(function () {
      $('.footer__bottomSide > ul > li').eq(liCounter++).addClass('onScrollShow bounceInUp');
      if (liCounter >= $('.footer__bottomSide > ul > li').length) {
        clearInterval(socialInterval);
      }
    }, 500);
  } else if (s < $('.footer__bottomSide').offset().top) {
    $('.footer__bottomSide > ul > li').removeClass('onScrollShow bounceInUp');
    clearInterval(socialInterval);
    liCounter = 0;
  }

})