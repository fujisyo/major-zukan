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
    $('.menu-title').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 550){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  $(window).scroll(function(){
    $('.scroll-american').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 570){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  $(window).scroll(function(){
    $('.scroll-nasyonal').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 585){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  $(window).scroll(function(){
    $('.pmain__sidebar__menu__player').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 585){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});