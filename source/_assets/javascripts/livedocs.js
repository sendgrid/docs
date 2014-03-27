$(function () {
  $('.tryit').click(function(){ 
    $(this).next('form').show();
  });

  $('.live-doc form').submit(function(e){
    e.preventDefault();

    url = $(this).parent().find('.url').val();
    method = $(this).parent().find('.method').val();

    console.log(url);
    console.log(method);

    $.ajax({
      type: method,
      url: url,
      data: $(this).serialize(),
    })
    .done(function(response) {
      alert(response);
    });
  });
});
