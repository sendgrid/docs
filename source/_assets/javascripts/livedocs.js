$(function () {
  $('.live-doc').each(function(){
    livedoc = $(this);
    form = $(this).find('form');
    form_table = $(this).find('form>table');
    params_table = $(this).prev('table');
    params_id = params_table.attr('id');
    identifier = params_id.substr(params_id.indexOf('-')+1, params_id.length);

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
      form_field += '<td><input type="text" class="input-sm ' + status_class + '" name="' + name + '"'
      if (required=="true") {
        form_field += ' placeholder="required"';
      }
      form_field += '/>';
      form_field += '</td>';
      form_field += "<td>" + requirements + "</td>";
      form_field += "<td>" + description + "</td>";
      form_field += "</tr>";

      form_table.append(form_field);
    });

    form.append('<button type="input" class="btn btn-default form-control">Make Request</button>');
    form.append('<hr/>'); 
    button = '<button class="pull-right btn btn-default tryit" id="tryit-'+identifier+'"><span class="icon-apiworkshop_v2"></span> Try It</button>'
 
    params_table.after(livedoc);
    params_table.prevAll('.anchor-wrap').first().append(button);
  });

  $('.tryit').click(function(){ 
    id = $(this).attr('id');
    identifier = id.substr(id.indexOf('-')+1, id.length);
    $('#parameters-' + identifier).hide();
    $('#apiexample-' + identifier).hide();
    $('#livedoc-' + identifier + ' form').slideDown();
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
