$('.callback--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#callback-modal',
		baseClass: 'reviews-fancybox',
		touch: false,
	});
});
$('.catalog--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#catalog-modal',
		baseClass: 'reviews-fancybox',
		touch: false,
	});
});
$('body').on('click', ".reviews--js-1", function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#reviews-modal-1',
		baseClass: 'reviews-fancybox',
		touch: false,
	});
});
$('body').on('click', ".reviews--js-2", function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#reviews-modal-2',
		baseClass: 'reviews-fancybox',
		touch: false,
	});
});
$('.confidentiality').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		src: '#confidentiality-modal',
		baseClass: 'confidentiality__bg',
		autoFocus: false,
		touch: false,
	});
});

if ($(".form__field").length > 0) {
	$('.form__field').on('focus', function () {
		$(this).parent().find('.form__icon').addClass("hover");
		$(this).css("border-color", "#5bc16c");
	});
	$('.form__field').on('blur', function () {
		let email = $(this).val();
		if (email.length == 0) {
			$(this).parent().find('.form__icon').removeClass("hover");
			$(this).css("border-color", "#a9b2b5");
		} else {
			$(this).parent().find('.form__icon').addClass("hover");
			$(this).css("border-color", "#a9b2b5");
		}
	});
}

// Phone mask
$('.phone-mask').mask('+7 (999)999-99-99');