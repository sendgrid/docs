var saveTreeState = function(){
	parent_nodes = $('.sidebar-nav .parent'); 

	parent_nodes.each(function(i){		
		open = $(this).hasClass('collapsibleListOpen');
		$.jStorage.set($(this).attr('id'), open)
	}); 
}

var loadTreeState = function(){
	parent_nodes = $('.sidebar-nav .parent'); 

	parent_nodes.each(function(i){		
		node = $(this);
		open = $.jStorage.get(node.attr('id'))

		// the toggle flips between states on load, so need to set them to the opposite
		if (open){ 
			node.addClass('collapsibleListClosed');
		}
		else {
			node.addClass('collapsibleListOpen');
		}
		
	});
}

$(function() {
	loadTreeState();
	if($('#nav-menu').length) {
		CollapsibleLists.applyTo(document.getElementById('nav-menu'));
	
		$('.collapsibleListOpen, .collapsibleListClosed').click(saveTreeState);	
	}
});

// Vid Grid Menu
$(document).ready(function(){  
	$('.accordion').on('show hide', function(e) {
	    $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-counter-active icon-counter-inactive', 200);
	});
});
