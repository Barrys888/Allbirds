const owl = $('.owl-carousel');
owl.owlCarousel({
  	loop: true,
  	margin: 24,
  	items: 3,
  	mouseDrag: true,
  });

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})






