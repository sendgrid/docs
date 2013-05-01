// Vid Grid Menu
$(document).ready(function(){  
	$('.accordion').on('show hide', function(e) {
	    $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-counter-active icon-counter-inactive', 200);
	});
});