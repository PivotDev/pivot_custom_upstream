(function($, Drupal, drupalSettings) {


    $(document).ready(function () {

      var $header = $("header"),
          $clone = $header.before($header.clone().addClass("cloned"));

      // $(window).on("scroll", function() {
      //     var fromTop = $(window).scrollTop();
      //
      // });

var offsets = $('.parallax-header').offset();
var top = offsets.top;
var left = offsets.left;
console.log(top);
console.log(left);

        // $(window).scroll(function() {
        //  if ($(this).scrollTop() > 100){
        //     $('body').addClass("sticky");
        //   }
        //   else{
        //     $('body').removeClass("sticky");
        //   }
        // });

      })


  // MatchHeight

        $(function() {
              $('.match').matchHeight();
              $('.eq-height').matchHeight();
              $('.eq-height-group').matchHeight({
                byRow: false
              });
              $('.match-hero').matchHeight({
                byRow: false
              });


        });

//ScrollReveal

        $(function() {
          window.sr = ScrollReveal();
          sr.reveal('.reveal', {delay:200, viewFactor:0.35, distance:0, scale:1, mobile: false});
          // var fooReveal = {
          //   viewFactor : 0.5,
          //   duration   : 5000,
          //   distance   : "0px",
          //   scale      : 0.9
          // };
        });

})(jQuery);
