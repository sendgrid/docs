// From http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
var hasFlash = false;
try {
  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  if(fo) hasFlash = true;
}catch(e){
  if(navigator.mimeTypes ["application/x-shockwave-flash"] !== undefined) hasFlash = true;
}

$(function() {

  $("body").addClass("flash");
  
  if(hasFlash){
    $("body").addClass("flash");
    //this is kinda hacky but let's infer the root from the home button
    var root = $('.nav-link:eq(0) > a').attr('href').replace('/index.html',''),
        path = root + '/flash/ZeroClipboard.swf';

    // Default ZeroClipboard to the root of the Docs
    ZeroClipboard.setDefaults({ moviePath: path, hoverClass: 'hover' });

    // Initialize all zClipboards
    glueClipboards();
  }else{
    $("body").removeClass("flash").addClass("no-flash");
    glueClipboards();
  }

  $(".expandcode").click(function() {
    if($("#overlay").length){
      $("#overlay").trigger("close");
    }else{
      var codeId = $(this).attr("id").replace('expand_','');
      var codeblockWrapper = $('#wrapper_' + codeId);
      codeblockWrapper.addClass('expanded').css("height", codeblockWrapper.height());

      var overlay = $('<div id="overlay"></div>');
      overlay.appendTo(document.body);

      codeblockWrapper.children().appendTo(overlay);

      $("#overlay .expandcode").addClass('btn-danger');
      $(this).html('<i class="icon-remove icon-white"> </i> Close');

      //prevent the body from scrolling
      $(document.body).css("overflow", "hidden");

      overlay.on("close", function() {
        var overlay = $('#overlay');

        var codeId = overlay.children(".code").attr("id").replace('code_','');
        var codeblockWrapper = $('#wrapper_' + codeId);

        $("#overlay .expandcode").removeClass('btn-danger');
        $("#overlay .expandcode").html('<i class="icon-fullscreen"> </i> Fullscreen');
        overlay.children().appendTo(codeblockWrapper);
        codeblockWrapper.css("height", "");
        $(document.body).css("overflow", "auto");
        overlay.remove();
      });

      overlay.on("click", function(e) {
        if(e.target == $(this)[0]){
          $(this).trigger("close");
        }
      });

      var eventInfo = ['_trackEvent', 'Code Block', 'Expand', codeId];
      gaPushEvent(eventInfo);
    }
    ZeroClipboard.destroy();
    glueClipboards();
  });

  // Fullscreen Code If Requested
  var match = document.location.hash.match(/#(wrapper|code)(_\w{32})-full(screen)?/);
  if(match){
    $(window).scrollTop($('#wrapper' + match[2]).offset().top);
    $('#wrapper' + match[2] + ' .expandcode').click();
  }
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
    });
  }else{
    if(!document.flashFreeClipboard){
      $(".copycode").click(function () {
        // Find the hash of the code
        var codeId = $(this).attr("id").replace('copy_','');
        // Get the element of the requested copy
        var codeElement = $('#code_' + codeId + ' .code');

        // From http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element
        var range = document.createRange();
        range.selectNodeContents(codeElement[0]);
        var select = window.getSelection();
        select.removeAllRanges();
        select.addRange(range);

        var metaKey = navigator.appVersion.indexOf("Mac") ? "&#8984;" : "Ctrl",
            copyPromptText = "Press " + metaKey + "-C to Copy";

        var codeElementPosition = codeElement.position(),
            codeElementWidth = codeElement.width();

        $("#copy-prompt").remove();
        $('<div id="copy-prompt">' + copyPromptText + '</div>').appendTo("body").css({
          "top" : codeElementPosition.top,
          "left" : codeElementPosition.left + (codeElementWidth - $("#copy-prompt").width())/2,
        });

        setTimeout(function () {
          $("#copy-prompt").fadeOut("slow");
          $(window).off("copyCode");
        }, 2000);

        $(window).on("keydown.copyCode", function (e) {
          if(e.keyCode == 67 && e.metaKey == true){
            $("#copy-prompt").fadeOut("fast");
            $(window).off("copyCode");
          }
        });

        var eventInfo = ['_trackEvent', 'Code Block', 'Copy', codeId];
        gaPushEvent(eventInfo);

      });
      document.flashFreeClipboard = true;
    }
  }
}
