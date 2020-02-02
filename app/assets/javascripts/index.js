$(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
  })

  $(window).scroll(function(){
    $('.pmain__title').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 400){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  $(window).scroll(function(){
    $('.slider').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 500){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  $(window).scroll(function(){
    $('.pmain__sidebar').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 600){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });

});