var headerHeight = $('.header').outerHeight();

$('.header__itemsBoxLink').click(function () {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - headerHeight
  }, 500);
});

$(window).on('scroll load resize', function () {
  var fromTop = $(this).scrollTop();
  var wh = $(this).innerHeight();
  //console.log(wh);

  if (fromTop > $('#projects').offset().top - wh * 3 / 4) {
    $('.projects__header').addClass('onScrollShow bounceInLeft');
  } else if (fromTop < $('#projects').offset().top - wh + 10) {
    $('.projects__header').removeClass('onScrollShow bounceInLeft');
  }

  if (fromTop > $('#contact').offset().top - wh * 3 / 4) {
    $('.contact__header').addClass('onScrollShow bounceInLeft');
  } else if (fromTop < $('#contact').offset().top - wh + 10) {
    $('.contact__header').removeClass('onScrollShow bounceInLeft');
  }

  if (fromTop > $('.slider__slideContentText').offset().top - wh -100 && $(window).innerWidth() > 600) {
    $('.slider__slideContentText').addClass('onScrollShow');
  } else if (fromTop < $('.slider__slideContentText').offset().top - wh &&  $(window).innerWidth() > 600) {
    $('.slider__slideContentText').removeClass('onScrollShow');
  }

  if (fromTop > $('.slider__slideContentImg').offset().top - wh -100 &&  $(window).innerWidth() > 600) {
    $('.slider__slideContentImg').addClass('onScrollShow');
  } else if (fromTop < $('.slider__slideContentImg').offset().top - wh &&  $(window).innerWidth() > 600) {
    $('.slider__slideContentImg').removeClass('onScrollShow');
  }

  if (fromTop > $('.contact__content').offset().top - wh / 2) {
    $('.contact__contentData').addClass('onScrollShow');
    $('.contact__contentQrcode').addClass('onScrollShow');
  } else if (fromTop < $('.contact__content').offset().top - wh) {
    $('.contact__contentData').removeClass('onScrollShow');
    $('.contact__contentQrcode').removeClass('onScrollShow');
  }

  var liCounter = -1;
  if (fromTop > $('.footer__bottomSide').offset().top - wh - 10) {
    var socialInterval = setInterval(function () {
      $('.footer__bottomSide > ul > li').eq(liCounter++).addClass('onScrollShow bounceInUp');
      if (liCounter >= $('.footer__bottomSide > ul > li').length) {
        clearInterval(socialInterval);
      }
    }, 500);
  } else if (fromTop < $('.footer__bottomSide').offset().top) {
    $('.footer__bottomSide > ul > li').removeClass('onScrollShow bounceInUp');
    clearInterval(socialInterval);
    liCounter = 0;
  }

  var rand = Math.random();

  for (var d = 0; d < aboutp.length; d++) {
    var aboutpEl = aboutp[d].childNodes; //wyrazy

    for (var f = 0; f < aboutpEl.length; f++) {
      var aboutpChLen = aboutpEl[f].childNodes.length; //litery
      var randChild = Math.floor(rand * aboutpChLen) % 5 == 0 ? Math.floor(rand * aboutpChLen) : 0;

      if (fromTop > $('#about').offset().top && fromTop <= $('#about').offset().top + wh / 2) {
        aboutpEl[f].childNodes[randChild].style = 'transform:translateY(' + fromTop + 'px); opacity:' + Math.random();
      } else if (fromTop <= $('#about').offset().top + 50) {
        for (var g = 0; g < aboutpChLen; g++) {
          aboutpEl[f].childNodes[g].style = '';
        }
      }

    }

  }

})