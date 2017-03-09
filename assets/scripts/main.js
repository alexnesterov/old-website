$(function(){
  console.log('OK!');

// Preloader
$(function () {
  var page = $('.page');
  var preloader = $('.preloader');
  var item = preloader.find('.preloader__status');

  function hidePreloader() {
    item.fadeOut(500);
    setTimeout(function () {
      preloader.fadeOut(500, function() {
        page.css({'overflow':'visible'});
        preloader.remove();
      });
    }, 500);
  }
  $(window).on('load', function() {
    setTimeout(function () {
      hidePreloader();
    }, 200);
  });
});

});
