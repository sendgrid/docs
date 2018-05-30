$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule to ensure js breakpoint matches css breakpoint
function checkSize(){
  var headerDropdown = $( "#js-sidebar-links" ).children("nav"),
      sidebarDropdown = $( "#sidebar-wrapper" ).children("nav");

    if (($("#js-sidebar-links").css("display") == "block" ) && sidebarDropdown.length) {
      sidebarDropdown.appendTo($("#js-sidebar-links"));
    } else if (($("#js-sidebar-links").css("display") == "none" ) && headerDropdown.length) {
      headerDropdown.appendTo($("#sidebar-wrapper"));
    }
}
