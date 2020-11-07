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
				slidesPerView: 1.1,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			600: {
				slidesPerView: 2,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			760: {
				slidesPerView: 2.5,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			1010: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				initialSlide: 0,
			},
			1200: {
				slidesPerView: 4,
				slidesPerGroup: 1,
				initialSlide: 0,
			}
		}
	});
});