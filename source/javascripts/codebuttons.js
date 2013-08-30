$(function() {

  $("body").addClass("flash");
  
  //this is kinda hacky but let's infer the root from the home button
  var root = $('.nav-link:eq(0) > a').attr('href').replace('/index.html',''),
      path = root + '/flash/ZeroClipboard.swf';

  // Default ZeroClipboard to the root of the Docs
  ZeroClipboard.setDefaults({ moviePath: path, hoverClass: 'hover' });

  // Initialize all zClipboards
  glueClipboards();

  $(".expandcode").click(function() {
    if($("#overlay").length){
      $("#overlay").trigger("close");
    }else{
      var codeId = $(this).attr("id").replace('expand_','');
      var codeblockWrapper = $('#wrapper_' + codeId);
      codeblockWrapper.addClass('expanded');

      var overlay = $('<div id="overlay"></div>');
      overlay.appendTo(document.body);

      codeblockWrapper.children().appendTo(overlay);

      $(this).html('<i class="icon-fullscreen"> </i> Close');

      //prevent the body from scrolling
      $(document.body).css("overflow", "hidden");

      overlay.on("close", function() {
        var overlay = $('#overlay');

        var codeId = overlay.children(".code").attr("id").replace('code_','');
        var codeblockWrapper = $('#wrapper_' + codeId);

        $("#overlay .expandcode").html('<i class="icon-fullscreen"> </i> Fullscreen');
        
        overlay.children().appendTo(codeblockWrapper);
        $(document.body).css("overflow", "auto");
        overlay.remove();
      });

      overlay.on("click", function(e) {
        if(e.target == $(this)[0]){
          $(this).trigger("close");
        }
      });
    }
    ZeroClipboard.destroy();
    glueClipboards();
  });
});

function glueClipboards () {
  if($("body").hasClass("flash")){
      $(".copycode").each(function () {

      var zclip = new ZeroClipboard($(this));
     
      zclip.on('dataRequested', function ( client, args ) {
        // Find the hash of the code
        var codeId = $(this).attr("id").replace('copy_','');
        // Get the text of the requested copy
        var text = $('#code_' + codeId + ' .code').text();

        // Get rid of the final \n as that's not really expected by users
        text.replace(/\n$/,'');

        client.setText( text );
      });

      zclip.on('complete', function ( client, args ) {
        $(this).html('<i class="icon-check"> </i> Copied');
      });
      zclip.on('noflash', function ( client, args ) {
        $("body").removeClass("flash").addClass("no-flash");
      });
    });
  }
}
