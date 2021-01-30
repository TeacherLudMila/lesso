	// scroll - start
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
	});
	// scroll - end



	// hide and show .fixed-btn - start

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	$(window).on('load', function() {
		$('.preloader').delay(800).fadeOut('slow');
	});

	// hide and show .fixed-btn - end 