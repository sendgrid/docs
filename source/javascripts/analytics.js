$(function () {

	$.expr[':'].external = function(obj){
		return !obj.href.match(/^mailto:/) && !obj.href.match(/^#:/) && (obj.hostname.replace(/^www\./i, '') != document.location.hostname.replace(/^www\./i, ''));
	};

	// Track any outbound links
	$("a:external").on("click keypress", function (e) {
		var eventLabel = $(this).attr("href");

		var eventInfo = ['_trackEvent', 'Link', 'Outbound', eventLabel, null, true];
		_gaq.push(eventInfo);
	});

	// Track any email sends
	$('a[href^="mailto:"]').on("click keypress", function (e) {
		var eventLabel = $(this).attr("href").substring(7);
		var eventInfo = ['_trackEvent', 'Link', 'Email', eventLabel];
		_gaq.push(eventInfo);
	});

});