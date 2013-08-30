var hasFlash = false;
try {
  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  if(fo) hasFlash = true;
}catch(e){
  if(navigator.mimeTypes ["application/x-shockwave-flash"] !== undefined) hasFlash = true;
}

$(function() {
  if(hasFlash){
    $("body").addClass("flash");
    //this is kinda hacky but let's infer the root from the home button
    var root = $('.nav-link:eq(0) > a').attr('href').replace('/index.html',''),
        path = root + '/flash/ZeroClipboard.swf';

    // Default ZeroClipboard to the root of the Docs
    ZeroClipboard.setDefaults({ moviePath: path, hoverClass: 'hover' });

    // Initialize all zClipboards
    $(".copycode").each(function () {

      var zclip = new ZeroClipboard($(this));
     
      zclip.on('dataRequested', function ( client, args ) {
        // Find the hash of the code
        var codeIdentifier = $(this).attr("id").replace('copy_','');
        // Get the text of the requested copy
        var text = $('#code_' + codeIdentifier + ' .code').text();

        // Get rid of the final \n as that's not really expected by users
        text.replace(/\n?$/,'');

        client.setText( text );
      });

      zclip.on('complete', function ( client, args ) {
        $(this).html('<i class="icon-check"> </i> Copied');
      });
    });
  }else{
    $("body").addClass("no-flash");
  }

  $(".expandcode").click(function() {
    var codeId = $(this).attr("id").replace('expand_','');
    var codeblock = $('#code_' + codeId).clone();
    codeblock.addClass('expanded');

    codeblock.appendTo(document.body);

    var overlay = $('<div id="overlay"> </div>');
    overlay.appendTo(document.body);

    //prevent the body from scrolling
    $(document.body).css("overflow", "hidden");

    innerblock = codeblock.find('.highlight');
    innerblock.css("height", $(window).height() - 100 + "px");
    innerblock.css("width", $(window).width() - 80 + "px");

    codeblock.css("width", $(window).width() - 80 + "px");

    innerblock.css("overflow", "scroll"); 

    //move all of this into a css class and toggle it
    //append a button that closes the window
    button = $('<a class="close-btn btn btn-large btn-danger"><i class="icon-remove"></i> Close</a>');
    button.css("float","right");
    button.css("position","fixed");
    button.css("top","20px");
    button.css("right","40px");
    innerblock.append(button);
    button.click(function() {
      $(document.body).css("overflow", "auto");
      $('#overlay').remove();
      
      var code = $(this).closest("figure.code")
      code.removeClass('expanded');
      code.css("width","auto");
      $(this).remove();
    });
  });
});
