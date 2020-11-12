$('.awards__slick').on("init", function (event, slick) {
	$('.awards__slick').parent().parent().find('.slick__info-box').html(slick.slideCount);
});
$('.awards__slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	infinite: false,
	speed: 1000,
	asNavFor: ".awards__left-slick"
});
$('.awards__left-slick').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	adaptiveHeight: true,
	infinite: false,
	fade: true,
	speed: 1000,
	focusOnSelect: ".awards__slick"
});
$('.awards .arrow.arrow--prev').on("click", function (event) {
	$(this).parents('.awards').find('.awards__slick').slick('slickPrev');
});
$('.awards .arrow.arrow--next').on("click", function (event) {
	$(this).parents('.awards').find('.awards__slick').slick('slickNext');
});
$(".awards__slick").on('afterChange', function (event, slick, currentSlide) {
	var promonumber = (currentSlide + 1);
	$(".awards .slick__info-number").html(promonumber);
});