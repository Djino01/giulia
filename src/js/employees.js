var swiperHome = $('.employees__swiper');
swiperHome.each(function () {
	var mySwiper = new Swiper(this, {
		slidesPerView: 4,
		spaceBetween: 40,
		slidesPerGroup: 1,
		loop: true,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		initialSlide: 0,
		navigation: {
			nextEl: '.employees .arrow.arrow--next',
			prevEl: '.employees .arrow.arrow--prev',
		},
		breakpoints: {
			100: {
				slidesPerView: 1.2,
				slidesPerGroup: 1,
				spaceBetween: 20,
				initialSlide: 0,
			},
			600: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				spaceBetween: 20,
				initialSlide: 0,
			},
			760: {
				slidesPerView: 2.4,
				slidesPerGroup: 1,
				spaceBetween: 20,
				initialSlide: 0,
			},
			1010: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			1318: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				initialSlide: 0,
			}
		}
	});
});