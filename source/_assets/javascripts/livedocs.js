var username = '';
var password = '';
var responseFormat = '';

var clear_results = function (form) {
  form = $(form);
  form.find('.body').text("");
  form.find('.response-body').addClass('hidden');
  form.find('.response-headers').addClass('hidden');
  form.find('.request-data').addClass('hidden');
  form.find('.data').text("");
  form.find('.headers').text("");
  form.find('.call').text("");
  form.find('.method').text("");

  form.hide();
};

var toggle_livedoc = function (identifier, show) {
  if (show) {
    $('#parameters-' + identifier).hide();
    $('#apiexample-' + identifier).hide();
    $('#livedoc-' + identifier).show();
    $('#cancel-' + identifier).show();
    $('#tryit-' + identifier).hide();
  }
  else {
    $('#parameters-' + identifier).show();
    $('#apiexample-' + identifier).show();
    $('#livedoc-' + identifier).hide();
    $('#cancel-' + identifier).hide();
    $('#tryit-' + identifier).show();
  }
}

var getParamHtml = function(data) {
  var required = $(data[1]).text().trim().toLowerCase() == "true" || $(data[1]).text().trim().toLowerCase() == "yes";

  var param = {
    name: $(data[0]).text().trim(),
    required: required,
    requirements: $(data[2]).text().trim(),
    description: $(data[3]).text().trim(),
    class: required == true ? "required" : ""
  };

  return $.render.form_field_template(param);
}

var addButtons = function (identifier, livedoc) {
  var tryit_html = $.render.tryit_button({ identifier: identifier });
  var cancel_html = $.render.cancel_button({ identifier: identifier });
  livedoc.prevAll('.anchor-wrap').first().after(tryit_html + cancel_html);
}

var getFormFieldHtml = function (identifier) {
  var params_table = $('#parameters-' + identifier);
  var rows = params_table.find('tr').slice(1); //throw out the header row

  var form_fields_html = "";
  rows.each(function () {
    form_fields_html += getParamHtml($(this).children('td'));
  });

  if (rows.length == 0) {
    form_fields_html += '<tr><td colspan="4">No Parameters Needed</td></tr>';
  }

  return form_fields_html;
}

var getCredentials = function(){
  if(username.length == 0 || password.length == 0) {
    $('#credentialsModal').modal();
  }
}

var getResponseFormat = function(){ return responseFormat.toLowerCase(); };

function validateRequired(form) {
  var valid = true;
  $(form).find('input.required').each(function () {
    if ($(this).val()) {
      $(this).css('border-color','inherit');
      return true;
    }

    $(this).css('border','1px solid red');
    valid = false;
  });

  return valid;
}

function prettyPrintResponse(response, format) {
  if (format == ".json") {
    object = JSON.parse(response);
    response = JSON.stringify(object, null, 2);
  }

  if (format == ".xml") {
    response = formatXml(response);
  }
  return response;
}
$(function () {
  //using jsrender for templates https://github.com/BorisMoore/jsrender
  var form_field_template = '<tr><td>{{>name}}</td><td><input type="text" class="{{>class}}" name="{{>name}}" {{if required}} placeholder="required" {{/if}}/></td><td>{{>requirements}}</td><td>{{>description}}</td></tr>';
  var cancel_button = '<button class="btn btn-danger cancel" id="cancel-{{>identifier}}">Cancel</button>';
  var tryit_button = '<button class="btn btn-success tryit" id="tryit-{{>identifier}}"><span class="icon-apiworkshop_v2"></span> Try It</button>';

  $.templates({
    form_field_template: form_field_template,
    cancel_button: cancel_button,
    tryit_button: tryit_button
  });

  $('.live-doc').each(function () {
    var livedoc = $(this);
    var form = $(this).find('form');
    var form_table = $(this).find('form>table');

    var id = $(this).attr('id');
    var identifier = id.substr(id.indexOf('-') + 1, id.length);

    addButtons(identifier, livedoc);
    form_table.append(getFormFieldHtml(identifier));

    form.append('<button type="input" class="btn btn-primary form-control">Make Request</button>');
  });

  $('.tryit').click(function () {
    getCredentials();
    var id = $(this).attr('id');
    var identifier = id.substr(id.indexOf('-') + 1, id.length);
    toggle_livedoc(identifier, true);
  });

  $('.cancel').click(function () {
    var id = $(this).attr('id');
    var identifier = id.substr(id.indexOf('-') + 1, id.length);
    toggle_livedoc(identifier, false);
  });

  $('.clear-request').click(function () {
    clear_results($(this).closest('.live-call'));
  });

  $('#credentials').submit(function (e) {
    e.preventDefault();
    username = $('#username').val();
    password = $('#password').val();
    responseFormat = $('#response-format').val();

    $('#credentialsModal').modal('hide');
  });

  $('.live-doc form').submit(function (e) {
    e.preventDefault();

    var valid = validateRequired(this);
    if (!valid) return;

    url = $(this).parent().find('.url').val();
    method = $(this).parent().find('.method').val().toUpperCase().trim();
    data = $(this).serialize().replace(/[^&]+=(?:&|$)/g, '').replace(/&$/, ''); //throw out empty params
    creds = "api_user=" + username + "&api_key=" + password;
    format = "." + getResponseFormat();

    if (method == "GET") {
      call = (url + format + "?api_user=" + username + "&api_key=XXXXXXXX&" + data).replace(/&$/, '');
    } else {
      call = url + format
    }

    live_call = $(this).nextAll('.live-call');
    live_call.find('.method').text(method);
    live_call.find('.call').text(call);

    if (method != "GET") {
      live_call.find('.request-data').removeClass("hidden");
      live_call.find('.data').text(("api_user=" + username + "&api_key=XXXXXXXX&" + decodeURIComponent(data)).replace(/&$/, ''));
    }

    live_call.find(".bar-indicator").show();
    live_call.show();

    console.log(data);

    data = 'api_user=' + username + '&api_key=' + password + "&" + data;
    data = data.replace(/&$/, '');

    $.ajax({
      type: method,
      url: url + format,
      data: data
    })
      .done(function (response, statusText, jqXHR) {
        response = prettyPrintResponse(response, format);
        live_call.find('.body').text(response);
        hljs.highlightBlock(live_call.find('.body')[0]);
        live_call.find('.response-body').removeClass('hidden');

        live_call.find('.headers').text(jqXHR.getAllResponseHeaders());
        live_call.find('.response-headers').removeClass('hidden');
      })
      .fail(function (jqXHR, statusText, errorThrown) {
        console.log(errorThrown); //Forbidden
        console.log(jqXHR.status); //403
        
        response = prettyPrintResponse(jqXHR.responseText, format);
        live_call.find('.body').text(response);
        hljs.highlightBlock(live_call.find('.body')[0]);
        live_call.find('.response-body').removeClass('hidden');
      })
      .always(function () {
        live_call.find(".bar-indicator").hide();
      });
  });
});
