$(function() {

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

});
