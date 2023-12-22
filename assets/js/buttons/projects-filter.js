function setProjectFilter(filter) {
	const $entries = $('.portfolio-entry');
	const $buttons = $('.button-filter');

	$entries.fadeOut('fast');

	switch(filter.toLowerCase()) {
		case 'unity':
			showEntry('.unity');
			break;
		case 'java':
			showEntry('.java');
			break;
		case 'web':
			showEntry('.web');
			break;
		default:
			showEntry('.portfolio-entry');
			break;
	}

	setActiveButton(filter);

	function showEntry(selector) {
		$(selector).fadeIn('slow').css('left', '0%');
	}

	function setActiveButton(filter) {
		$buttons.removeClass('active');
		$(`.button-filter[data-filter="${filter}"]`).addClass('active');
	}
}

$(document).ready(function () {
	$('.button-filter').click(function (event) {
		const filter = $(event.target).data('filter');
		setProjectFilter(filter);
	});
});