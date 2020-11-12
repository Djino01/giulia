if ($(".projecrs__block-1").length > 0) {
	$('.projecrs__block-1 .projecrs__slick').on("init", function (event, slick) {
		$('.projecrs__block-1 .projecrs__slick').parent().find('.slick__info-box').html("0" + slick.slideCount);
	});
	$('.projecrs__block-1 .projecrs__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false,
		speed: 1000,
		/*autoplay: true,
		autoplaySpeed: 3000,*/
	});
	$('.projecrs__block-1 .arrow.arrow--prev').on("click", function (event) {
		$(this).parents('.projecrs__block-1').find('.projecrs__slick').slick('slickPrev');
	});
	$('.projecrs__block-1 .arrow.arrow--next').on("click", function (event) {
		$(this).parents('.projecrs__block-1').find('.projecrs__slick').slick('slickNext');
	});
	function productsliderinfo() {
		$('.projecrs__block-1 .slick__info-box').html($('.projecrs__block-1 .projecrs__slide').length);
	}
	productsliderinfo();
	$(".projecrs__block-1 .projecrs__slick").on('afterChange', function (event, slick, currentSlide) {
		var promonumber = (currentSlide + 1);
		$(".projecrs__block-1  .slick__info-number").html(promonumber);
	});
}

if ($(".projecrs__block-2").length > 0) {
	$('.projecrs__block-2 .projecrs__slick').on("init", function (event, slick) {
		$('.projecrs__block-2 .projecrs__slick').parent().find('.slick__info-box').html("0" + slick.slideCount);
	});
	$('.projecrs__block-2 .projecrs__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false,
		speed: 1000,
		/*autoplay: true,
		autoplaySpeed: 3000,*/
	});
	$('.projecrs__block-2 .arrow.arrow--prev').on("click", function (event) {
		$(this).parents('.projecrs__block-2').find('.projecrs__slick').slick('slickPrev');
	});
	$('.projecrs__block-2 .arrow.arrow--next').on("click", function (event) {
		$(this).parents('.projecrs__block-2').find('.projecrs__slick').slick('slickNext');
	});
	function productsliderinfo() {
		$('.projecrs__block-2 .slick__info-box').html($('.projecrs__block-2 .projecrs__slide').length);
	}
	productsliderinfo();
	$(".projecrs__block-2 .projecrs__slick").on('afterChange', function (event, slick, currentSlide) {
		var promonumber = (currentSlide + 1);
		$(".projecrs__block-2  .slick__info-number").html(promonumber);
	});
}

if ($(".projecrs__block-3").length > 0) {
	$('.projecrs__block-3 .projecrs__slick').on("init", function (event, slick) {
		$('.projecrs__block-3 .projecrs__slick').parent().find('.slick__info-box').html("0" + slick.slideCount);
	});
	$('.projecrs__block-3 .projecrs__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false,
		speed: 1000,
		/*autoplay: true,
		autoplaySpeed: 3000,*/
	});
	$('.projecrs__block-3 .arrow.arrow--prev').on("click", function (event) {
		$(this).parents('.projecrs__block-3').find('.projecrs__slick').slick('slickPrev');
	});
	$('.projecrs__block-3 .arrow.arrow--next').on("click", function (event) {
		$(this).parents('.projecrs__block-3').find('.projecrs__slick').slick('slickNext');
	});
	function productsliderinfo() {
		$('.projecrs__block-3 .slick__info-box').html($('.projecrs__block-3 .projecrs__slide').length);
	}
	productsliderinfo();
	$(".projecrs__block-3 .projecrs__slick").on('afterChange', function (event, slick, currentSlide) {
		var promonumber = (currentSlide + 1);
		$(".projecrs__block-3  .slick__info-number").html(promonumber);
	});
}



$('[data-projecrs]').on('click', function (e) {
	e.preventDefault();
	$('.projecrs__tab').removeClass('active');
	$('.projecrs__block').removeClass('active');
	$(this).addClass('active');
	var projecrs = $(this).data('projecrs');
	$('[data-projecrs-block="' + projecrs + '"]').toggleClass('active');
	$(".projecrs__slick").slick('setPosition');
});

$(".projecrs__box-play").fancybox({
	backFocus: false
});