$(function(){
  console.log('OK!');

// Preloader
$(function () {
  var page = $('.page');
  var preloader = $('.preloader');

  function hidePreloader() {
    preloader.addClass('-loaded');
    setTimeout(function () {
      preloader.fadeOut(700, function() {
        page.css({'overflow':'visible'});
        preloader.remove();
      });
    }, 800);
  }
  $(window).on('load', function() {
    setTimeout(function () {
      hidePreloader();
    }, 200);
  });
});

});
