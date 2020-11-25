// Main menu open
$(".header__burger").on("click", function (event) {
	event.preventDefault();
	$(this).toggleClass("active");
	$("body").toggleClass("lock");
	$(".header__bottom").toggleClass("active");
});

// Scrolled animate
$('.header__menu a, .header__showrooms').on("click", function () {
	$('body').removeClass('lock');
	$('.header__bottom').removeClass('active');
	if ($(window).width() <= '1010') {
		$('.header__burger').removeClass('active');
		$('.header__bottom').removeClass('active');
	}
	if ($(window).width() >= '1318') {
		var translaytThree = 70;
	}
	if ($(window).width() <= '1318') {
		var translaytThree = 66;
	}
	if ($(window).width() <= '1010') {
		var translaytThree = 93;
	}
	var elementClick = $(this).attr('href');
	var destination = $(elementClick).offset().top - translaytThree;
	jQuery('html:not(:animated),body:not(:animated)').animate(
		{ scrollTop: destination },
		600
	);
	return false;
});

var mainHeader = $('.cd-auto-hide-header'),
	secondaryNavigation = $('.cd-secondary-nav'),
	belowNavHeroContent = $('.sub-nav-hero'),
	headerHeight = mainHeader.height();

//set scrolling variables
var scrolling = false,
	previousTop = 0,
	currentTop = 0,
	scrollDelta = 10,
	scrollOffset = 50;

$(window).on('scroll', function () {
	if (!scrolling) {
		scrolling = true;
		(!window.requestAnimationFrame)
			? setTimeout(autoHideHeader, 250)
			: requestAnimationFrame(autoHideHeader);
	}
});

$(window).on('resize', function () {
	headerHeight = mainHeader.height();
});

function autoHideHeader() {
	var currentTop = $(window).scrollTop();

	(belowNavHeroContent.length > 0)
		? checkStickyNavigation(currentTop) // secondary navigation below intro
		: checkSimpleNavigation(currentTop);

	previousTop = currentTop;
	scrolling = false;
}

function checkSimpleNavigation(currentTop) {
	//there's no secondary nav or secondary nav is below primary nav
	if (previousTop - currentTop > scrollDelta) {
		//if scrolling up...
		mainHeader.addClass('active header_active header_fixed');
		mainHeader.removeClass('header_bottom');
	} else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
		//if scrolling down...
		mainHeader.removeClass('active header_active header_fixed header_fix');
		mainHeader.addClass('header_bottom');
	}
	if (currentTop == 0) {
		mainHeader.removeClass('active header_active header_fixed');
		mainHeader.addClass('header_fix');
	}
}