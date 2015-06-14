


$(document).ready(function() {

  //validate email
  // var validEmail = false;

  // $('#mce-EMAIL').change(function() {
  //   var regex = /^(\w[-._+\w]*\w@\w[-._\w]*\w\.\w{2,3})$/
  //   validEmail = validateField($(this), regex);
  //   validateForm;
  // });

  // function validateField(field, regex) {
  //   console.log(field.val().match(regex));
  //   if  (field.val().match(regex) ) {
  //       field.parent().removeClass('has-error has-feedback');
  //       field.parent().addClass('has-success has-feedback');
  //       return true

  //   } else {
  //       field.parent().removeClass('has-success has-feedback');
  //       field.parent().addClass('has-error has-feedback');
  //       return false
  //   }
  // };

  // function validateForm() {

  //   $('#mc-btn').prop('disabled', true)
  //   if validEmail {
  //     $('.btn').prop('disabled', false);
  //     // alert("Empty Fields!!");
  //   };
  // };

  $(".window-height").css("height", $(window).height());

  // navbar transition jQuery script
  // $(window).scroll(function(e){
  //   if ($(this).scrollTop() > 0) {
  //     $(".navbar").css({
  //       "background": "rgba(0, 0, 0, 0.7)",
  //       "box-shadow": "0 0 2px black"
  //     });
  //   }
  //   else {
  //     $(".navbar").css({
  //       "background": "transparent",
  //       "box-shadow": "0 0 0px transparent"
  //     });
  //   }
  // });

  // // navbar transition jQuery script
  // $(window).scroll(function(e){
  //   if ($(this).scrollTop() > 200) {
  //     $(".navbar").slideUp();
  //   }
  //   else {
  //     $(".navbar").slideDown();
  //   }
  // });

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
