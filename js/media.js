/*Who is listening for an event?
What event are they listening for?
What function do I call when it occurs?*/

function changePhoto() {
	var $active = $('#slideshow .active');
	var $next;

	if ( $('.mainphoto').eq(7).hasClass('active') ) {
		$next = $('.mainphoto').eq(0);
	}
	else {
		$next = $active.next();
	}

	$next.addClass('active');
	$active.removeClass('active');
}

$('.mainphoto').on('click', changePhoto);