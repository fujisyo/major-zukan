$(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
  })

  $(window).scroll(function(){
    $('.pmain').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 450){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});