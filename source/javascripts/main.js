


$(document).ready(function() {
  $(".window-height").css("height", $(window).height());
  var isMobile = window.matchMedia("only screen and (max-width: 992px)");
  if (!isMobile.matches) {
    $(".window-height-except-mobile").css("height", $(window).height());
  }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('body').bind('click', function(e) {
  if($(e.target).closest('.navbar').length == 0) {
    // click happened outside of .navbar, so hide
    var opened = $('.navbar-collapse').hasClass('collapse in');
    if ( opened === true ) {
        $('.navbar-collapse').collapse('hide');
    };
  }
});
