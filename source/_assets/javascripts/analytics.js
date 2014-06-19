function gtmEvent() {
	if(typeof arguments[0] === "object"){
		var customEvent = arguments[0];
		customEvent.event = 'customEvent';
	}

	if(typeof arguments[0] === "string"){
		var customEvent = {
			event: 'customEvent',
			'eventCategory' : arguments[0],
			'eventAction' : arguments[1],
			'eventLabel' : typeof arguments[2] !== "undefined" ? arguments[2] : "",
			'eventValue' : typeof arguments[3] !== "undefined" ? arguments[3] : ""
		};
		if (arguments[4] && typeof arguments[4] === "object" && typeof arguments[4].nonInteraction !== "undefined") {
				customEvent.nonInteraction = arguments[4].nonInteraction;
		}
	}

	if(customEvent){
		var processed = dataLayer.push(customEvent);
		if (customEvent.debug || (arguments[4] && typeof arguments[4] === "object" && typeof arguments[4].debug)) {
			console.debug("Custom Event Processed?", !processed, customEvent);
		}
	}
}

function gaPushEvent (eventInfo) {
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

	if (typeof dataLayer === "object" || typeof dataLayer === "array") {
		gtmEvent(gauEventInfo);	
	} else if(typeof ga === "function") {
		ga('send', gauEventInfo);
	} else if (typeof _gaq === "object" || typeof _gaq === "array") {
		_gaq.push(eventInfo);
	}
}

jQuery(function ($) {

	$.expr[':'].external = function(obj){
		return !obj.href.match(/^mailto:/) && !obj.href.match(/^#:/) && (obj.hostname.replace(/^www\./i, '') != document.location.hostname.replace(/^www\./i, ''));
	};

	// Track any outbound links
	$("a:external").on("click keypress", function (e) {
		var eventLabel = $(this).attr("href");

		var eventInfo = ['_trackEvent', 'Link', 'Outbound', eventLabel, null, true];
		gaPushEvent(eventInfo);
	});

	// Track any email sends
	$('a[href^="mailto:"]').on("click keypress", function (e) {
		var eventLabel = $(this).attr("href").substring(7);
		var eventInfo = ['_trackEvent', 'Link', 'Email', eventLabel];
		gaPushEvent(eventInfo);
	});

	$(".feedback-positive, .feedback-negative").on("click keypress", function (e) {
		e.preventDefault();

		var feedbackType = $(this).hasClass("feedback-positive");
		var eventLabel = feedbackType ? "Good" : "Bad";
		var eventValue = Number(feedbackType)*10;
		var eventInfo = ['_trackEvent', 'Feedback', 'Vote', eventLabel, eventValue];

		gaPushEvent(eventInfo);

		$(this).closest(".feedback").text("Thanks for providing feedback!");
	});

	$(".feedback-more").on("click keypress", function () {

		var eventInfo = ['_trackEvent', 'Feedback', 'More', 'Click'];

		gaPushEvent(eventInfo);

		$(this).closest(".feedback").text("Thanks for providing feedback!");
	});

	$("img[height=1][width=1]").hide();

});
