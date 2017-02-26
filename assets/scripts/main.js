$(function(){
  console.log('OK!');

// Preloader
$(function () {
  var page = $('.page');
  var preloader = $('.preloader');
  var item = preloader.find('.preloader__status');

  function hidePreloader() {
    item.fadeOut();
    setTimeout(function () {
      preloader.fadeOut('slow', function() {
        page.css({'overflow':'visible'});
        preloader.remove();
      });
    }, 300);
  }
  $(window).on('load', function() {
    hidePreloader();
    $('.profile__info').addClass('animate');
  });
});

// Profile
$(function () {
  var animatedItem = $('.profile__photo');

  // animatedItem.addClass('animated');
});

});
