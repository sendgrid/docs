$(function(){
  $('input').on("focus", function(){
     $(this).siblings('label').addClass("is-focused");
     $(this).parent('.input-group').addClass("is-focused");
     $(this).parent('.form-group').addClass("is-focused");
  });
  $('input').on("blur", function(){
    $(this).siblings('label').removeClass("is-focused");
    $(this).parent('.input-group').removeClass("is-focused");
    $(this).parent('.form-group').removeClass("is-focused");
    if($(this).val() ) {
      $(this).siblings('label').addClass('is-dirty');
    } else {
      $(this).siblings('label').removeClass('is-dirty');
    }
  });
  $('input').each(function(){
    if($(this).val() ) {
      $(this).siblings('label').addClass('is-dirty');
    } else {
      $(this).siblings('label').removeClass('is-dirty');
    }
  });
});
