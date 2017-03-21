$(function(){
  console.log('OK!');

// Preloader
$(function () {
  var page = $('.page');
  var preloader = $('.preloader');
  var preloaderSpinner = $('.preloader__spinner');
  var scrollValue = $(document).scrollTop();

  function hidePreloader() {
    if (scrollValue === 0) {
      preloader.addClass('-loaded');
    }
    else {
      preloaderSpinner.fadeOut(1000);
    }
    setTimeout(function () {
      preloader.fadeOut(700, function() {
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
