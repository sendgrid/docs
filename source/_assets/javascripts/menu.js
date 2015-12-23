$('#nav-menu').each(function() {
	if($(this).length) {
		$(".collapsibleListOpen, .collapsibleListClosed").toggleClass("collapsibleListOpen collapsibleListClosed");
		CollapsibleLists.applyTo(this);
	}

	$.ajax({
		url: "https://sendgrid.com/user/checkLogin",
		method: "GET",
		success: function (data) {
			if(data.logged_in === true){
				$("body").removeClass("logged-out");
				$("body").addClass("logged-in");
			}
		},
		dataType: "jsonp"
	});

	$('#nav-menu').click(function (e) {
		if(e.target == this){
			$(this).toggleClass("shown");
		}
	});
});