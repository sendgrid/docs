$(function () {
  $('.live-doc').each(function(){
    parent_id = $(this).parent().attr('id');
    form = $(this).find('form');
    form_table = $(this).find('form>table');
    identifier = parent_id.substr(0,parent_id.indexOf('-'));
    params_table = $('#parameters-' + identifier);

    rows = params_table.find('tr').slice(1); //throw out the header row

    rows.each(function(){
      data = $(this).children('td');
      name = $(data[0]).text();
      required = $(data[1]).text();
      requirements = $(data[2]).text();
      description = $(data[3]).text();

      status_class = required == "true" ? "has-error" : "";
      input_class = required == "true" ? "required" : "";

      form_field = "<tr><td>" + name + "</td>";
      form_field = form_field + '<td><input type="text" class="' + status_class + '" name="' + name + '">'
      form_field = form_field + '</td>';
      form_field = form_field + "<td>" + requirements + "</td>";
      form_field = form_field + "<td>" + description + "</td>";
      form_field = form_field + "</tr>";

      form_table.append(form_field); 
    });

    form.append('<button type="input" class="btn btn-default">Make Request</button>');
  });

  $('.tryit').click(function(){ 
    $(this).next('form').show();
  });

  $('.live-doc form').submit(function(e){
    e.preventDefault();

    url = $(this).parent().find('.url').val();
    method = $(this).parent().find('.method').val();

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
