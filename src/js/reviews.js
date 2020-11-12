$('.reviews__slick').on("init", function (event, slick) {
	$('.reviews__slick').parent().find('.reviews .slick__info-box').html("0" + slick.slideCount);
});
$('.reviews__slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: false,
	fade: true,
	speed: 1000,
	/*autoplay: true,
	autoplaySpeed: 3000,*/
});
$('.reviews .arrow.arrow--prev').on("click", function (event) {
	$(this).parents('.reviews').find('.reviews__slick').slick('slickPrev');
});
$('.reviews .arrow.arrow--next').on("click", function (event) {
	$(this).parents('.reviews').find('.reviews__slick').slick('slickNext');
});
function productsliderinfo() {
	$('.reviews .slick__info-box').html($('.reviews__slide').length);
}
productsliderinfo();
$(".reviews__slick").on('afterChange', function (event, slick, currentSlide) {
	var promonumber = (currentSlide + 1);
	$(".reviews .slick__info-number").html(promonumber);
});

