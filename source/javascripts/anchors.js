$(function() {
  $(".anchor-wrap").hover(
    function () {
     $(this).find('i').css('display','inline-block');
    },
    function () {
      $(this).find('i').hide();
    }
  )
});
