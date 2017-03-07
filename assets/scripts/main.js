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
  });
});

// Info block height automate
// $(function () {
//   var infoBlock = $('.info');
//   var infoContainer = $('.info .container');
//   var containerHeight = infoContainer.height();
//   var infoBlockHeight = infoBlock.height();
//
//   var headerHeight = $('.header').height();
//   var footerHeight = $('.footer').height();
//
//   infoBlock.css({
//     paddingTop: headerHeight,
//     paddingBottom: footerHeight
//   });
//
//   var setStatic = function () {
//     infoBlock.removeClass('_static');
//     containerHeight = infoContainer.height();
//     infoBlockHeight = infoBlock.height();
//     if (infoBlockHeight < containerHeight) {
//       infoBlock.addClass('_static');
//     }
//   };
//   setStatic();
//   $(window).resize(function() {
//     setStatic();
//   });
// });

});
