jQuery(function ($) {

	function pushEvent (eventInfo) {
		var gauEventInfo = {
			'hitType': 'event',
			'eventCategory': eventInfo[1],
			'eventAction': eventInfo[2]
		};
		if(eventInfo[3]){
			gauEventInfo['eventLabel'] = eventInfo[3];
		}
		if(eventInfo[4]){
			gauEventInfo['eventValue'] = eventInfo[4];
		}
		if(eventInfo[5]){
			gauEventInfo['nonInteraction'] = Number(eventInfo[4]);
		}

		if(typeof ga === "function") {
			ga('send', gauEventInfo);
		} else if (_gaq) {
			_gaq.push(eventInfo);
		}
	}

	$.expr[':'].external = function(obj){
		return !obj.href.match(/^mailto:/) && !obj.href.match(/^#:/) && (obj.hostname.replace(/^www\./i, '') != document.location.hostname.replace(/^www\./i, ''));
	};

	// Track any outbound links
	$("a:external").on("click keypress", function (e) {
		var eventLabel = $(this).attr("href");

		var eventInfo = ['_trackEvent', 'Link', 'Outbound', eventLabel, null, true];
		pushEvent(eventInfo);
	});

	// Track any email sends
	$('a[href^="mailto:"]').on("click keypress", function (e) {
		var eventLabel = $(this).attr("href").substring(7);
		var eventInfo = ['_trackEvent', 'Link', 'Email', eventLabel];
		pushEvent(eventInfo);
	});

});