$('[data-showrooms]').on('click', function (e) {
	e.preventDefault();
	$('.showrooms__tab').removeClass('active');
	$('.showrooms__block').removeClass('active');
	$(this).addClass('active');
	var showrooms = $(this).data('showrooms');
	$('[data-showrooms-block="' + showrooms + '"]').toggleClass('active');
});

$("body").on("click", ".showrooms__marker", function () {
	$(this).toggleClass("active");
	$(this).parent().find(".showrooms__card").toggleClass("active");
});