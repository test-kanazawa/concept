$(function() {
	var $win = $(window),
			$main = $('main'),
			$nav = $('.topicpath'),
			navHeight = $nav.outerHeight(),
			spHeaderHeight = 48,
			navPos = $nav.offset().top,
			fixedClass = 'fixed fade-in';

	$win.on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > navPos ) {
			$nav.addClass(fixedClass);
			if ($(window).width() > 991) {
				$main.css('margin-top', navHeight);
			} else {
				$main.css('margin-top', (navHeight + spHeaderHeight));
			}
		} else {
			$nav.removeClass(fixedClass);
			$main.css('margin-top', '0');
		}
	});
});

$(function () {
	$('.btn-sub-nav').click(function() {
		$(this).toggleClass('open');
	})
});