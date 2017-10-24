jQuery(function ($) {
	$(".callout-github").first().each(function () {
		var $callout = $(this);
		$callout.affix({
			offset: {
				top: $callout.offset().top
			}
		})
	});
});
