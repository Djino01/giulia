// form
$('form').submit(function (e) {

	var form = $(this),
		errors = true,
		notice = $('.notice');

	form.find('[type="text"][data-error]').each(function () {
		if (errors) {
			var field = $(this);
			var val = field.val();
			var textError = field.attr('data-error');

			if (val == '') {
				notice.text(textError).addClass('active');
				field.addClass('field-error');
				setTimeout(function () {
					notice.text('').removeClass('active');
				}, 2000);
				errors = false;
				field.focus();
			} else {
				$(this).removeClass('field-error');
			}
		}
	});

	if (errors) {
		return true;
	} else {
		return false;
	}

});