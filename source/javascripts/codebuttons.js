$(function() {
  $('a[data-toggle="tab"]').on('shown', initZclip); 
  initZclip();  
});

initZclip = function(e) {
  $('.tab-pane:hidden .copycode').unbind();
  $('.tab-pane:hidden').find('.zclip').remove();

  var options = {
      path:'/flash/ZeroClipboard.swf',
      copy: function(){
        $('.copycode').html('<i class="icon-file"></i> Copy');
        var element = $('#' + this.id.replace('copy_','code_')); 
        var text = element.text(); 
        return text; 
      },
      afterCopy:function(){
        $(this).html('<i class="icon-check"></i> Copied');
      }
    }

  if (typeof(e) != "undefined") {
    el = $(e.target);
    container = $(el.attr('href'));
    container.find('.copycode').zclip(options);
  } 
  else 
    {
      $('.copycode').zclip(options);
    }
}
