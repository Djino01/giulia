
$('.reviews__slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: true,
	fade: true,
	speed: 1000,
	autoplay: false,
	autoplaySpeed: 2000,
});
$('.reviews .arrow.arrow--prev').on("click", function (event) {
	$(this).parents('.reviews').find('.reviews__slick').slick('slickPrev');
});
$('.reviews .arrow.arrow--next').on("click", function (event) {
	$(this).parents('.reviews').find('.reviews__slick').slick('slickNext');
});
