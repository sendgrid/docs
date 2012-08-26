$(function() {
	CollapsibleLists.applyTo(document.getElementById('nav-menu'));
	
    var navigation_offset_top = $('#nav-menu').offset().top;
	var navigation_offset_left = $('#nav-menu').offset().left;
	var navigation_width = $('#nav-menu').width();

	$(window).resize(function() {
		navigation_offset_top = $('#nav-menu').offset().top;
		navigation_offset_left = $('#nav-menu').offset().left;
	 	navigation_width = $('#nav-menu').width();
	});

// our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

	    // grab the initial top offset of the navigation 

		
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > navigation_offset_top) { 
            $('#nav-menu').css({ 'position': 'fixed', 'top':0, 'left':navigation_offset_left, 'width':navigation_width+'px' });
        } else {
            $('#nav-menu').css({ 'position': 'relative', 'left':0, 'width':'auto' }); 
        }   
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
});
