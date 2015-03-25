//this depends on formatXml.js and parseQuerystring.js
//TODO formalize this dependency

//based on the jquery plugin lightweight boilerplate
//http://www.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns-2/

$(function() {
  $('#credentials').submit(function (e) {
    e.preventDefault();
    username = $('#username').val();
    password = $('#password').val();
    responseFormat = $('#response-format').val();
    $.cookie('username', username, { secure:true });
    $.cookie('password', password, { secure:true });
    $.cookie('responseFormat', responseFormat, { secure:true });

    $('#credentialsModal').modal('hide');
  });
});

;(function ( $, window, document, undefined ) {
  var form_field_template = '<tr><td>{{>name}}</td><td><input type="text" class="{{>input_class}}" name="{{>name}}" {{if required}} placeholder="required" {{/if}}/></td><td>{{>requirements}}</td><td>{{>description}}</td></tr>';
  var cancel_button = '<button class="btn btn-danger cancel" id="cancel-{{>identifier}}">Cancel</button>';
  var tryit_button = '<button class="btn btn-success tryit" id="tryit-{{>identifier}}">Try It</button>';
  var settings_button = '<button class="btn btn-default settings" id="settings-{{>identifier}}">Settings</button>';

  $.templates({
    form_field_template: form_field_template,
    cancel_button: cancel_button,
    tryit_button: tryit_button,
    settings_button: settings_button
  });

  var pluginName = 'livedocs', defaults = {};

  var buildQueryString = function(form) {
    var data = "";
    form.serializeArray().forEach(function(obj) {
      var k = obj.name, v = obj.value;
		  if (v[0] === "[" && v.slice(-1) === "]") { // Array!
			  var array = JSON.parse(v);
				for(var i = 0, len = array.length; i < len; i++)
				  data += k + "[]=" + (typeof(array[i]) !== "object" ? array[i] : JSON.stringify(array[i])) + "&";
			} else {
        if (v)
				  data += k + "=" + v + "&";
			}
    });
	  return data.slice(0, -1);
  };

  //there are currently no options but some things probably should be
  //so leaving the scaffolding up
  function Livedocs( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  };

  Livedocs.prototype = {
    init: function () {
      livedoc = $(this.element);
      var form = livedoc.find('form');
      var form_table = livedoc.find('form>table');

      var id = livedoc.attr('id');
      var identifier = id.substr(id.indexOf('-') + 1, id.length);

      Livedocs.addButtons(identifier, livedoc);
      form_table.append(Livedocs.getFormFieldHtml(identifier));
      form.append('<div class="text-center"><button type="input" class="btn btn-primary request-button">Make Request</button></div>');

      Livedocs.updateCurl(livedoc);

      Livedocs.addEventHandlers(identifier,id);

      form.submit(function (e) {
        e.preventDefault();

        username = $.cookie('username');
        password = window.encodeURIComponent($.cookie('password'));

        var valid = Livedocs.validateRequired(this);
        if (!valid) return;

        url = $(this).parent().find('.url').val();
        method = $(this).parent().find('.method').val().toUpperCase().trim();
        creds = "api_user=" + username + "&api_key=" + password;
        format = "." + Livedocs.getResponseFormat();
        data = buildQueryString($(this));

        if (method == "GET") {
         call = parseQuerystring((url + format + "?api_user=" + username + "&api_key=XXXXXXXX&" + data).replace(/&$/, ''));
        } else {
         call = url + format;
        }

        live_call = $(this).nextAll('.live-call');
        live_call.find('.method').text(method);
        live_call.find('.call').html(call);

        if (method != "GET") {
          live_call.find('.request-data').removeClass("hidden");
          data_pretty = ("api_user=" + username + "&api_key=XXXXXXXX&" + decodeURIComponent(data)).replace(/&$/, '');
          data_pretty = parseQuerystring(data_pretty);
          live_call.find('.data').html(data_pretty);
        }

        data = 'api_user=' + username + '&api_key=' + password + "&" + data;
        data = data.replace(/&$/, '');

        live_call.find(".bar-indicator").show();
        live_call.show();

        $.ajax({
          type: method,
          url: url + format,
          data: data,
          dataType: 'text'
        })
        .done(function (response, statusText, jqXHR) {
          response = Livedocs.prettyPrintResponse(response, format);
          live_call.find('.body').text(response);
          hljs.highlightBlock(live_call.find('.body')[0]);
          live_call.find('.response-body').removeClass('hidden');

          live_call.find('.headers').text(jqXHR.getAllResponseHeaders());
          hljs.highlightBlock(live_call.find('.headers')[0]);
          live_call.find('.response-headers').removeClass('hidden');

          live_call.find('.status').text(jqXHR.status + ' - ' + jqXHR.statusText);
          live_call.find('.response-status').removeClass('hidden');
        })
        .fail(function (jqXHR, statusText, errorThrown) {
          live_call.find('.status').text(jqXHR.status + " - " + errorThrown);
          live_call.find('.response-status').removeClass('hidden');

          response = Livedocs.prettyPrintResponse(jqXHR.responseText, format);
          live_call.find('.body').text(response);

          hljs.highlightBlock(live_call.find('.body')[0]);
          live_call.find('.response-body').removeClass('hidden');
        })
        .always(function () {
          live_call.find(".bar-indicator").hide();
        });
      });
    }
  };

    Livedocs.addButtons = function(identifier, livedoc) {
      var tryit_html = $.render.tryit_button({ identifier: identifier });
      var cancel_html = $.render.cancel_button({ identifier: identifier });
      var settings_html = $.render.settings_button({ identifier: identifier });
      livedoc.prevAll('.anchor-wrap').first().after('<div>' + tryit_html + cancel_html + settings_html + '</div>');
    }

    Livedocs.addEventHandlers = function(identifier, id) {
      $('#' + id + ' .live-form .live-params input').on("blur", function() {
        livedoc = $(this).closest('.live-doc');
        Livedocs.updateCurl(livedoc);
      });

      $('#clear-request-' + identifier).click(function () {
        Livedocs.clearResults($(this).closest('.live-call'));
      });

      $('#tryit-' + identifier).click(function () {
        Livedocs.getCredentials();
        var id = $(this).attr('id');
        var identifier = id.substr(id.indexOf('-') + 1, id.length);
        Livedocs.toggleLivedoc(identifier, true);
      })

      $('#cancel-' + identifier).click(function () {
        var id = $(this).attr('id');
        var identifier = id.substr(id.indexOf('-') + 1, id.length);
        Livedocs.toggleLivedoc(identifier, false);
      });

      $('#settings-' + identifier).click(function () {
        $('#credentialsModal').modal();
      });
    }

    Livedocs.getFormFieldHtml = function(identifier) {
      var params_table = $('#parameters-' + identifier);
      var rows = params_table.find('tr').slice(1); //throw out the header row

      var form_fields_html = "";
      rows.each(function () {
        form_fields_html += Livedocs.getParamHtml($(this).children('td'));
      });

      if (rows.length == 0) {
        form_fields_html += '<tr><td colspan="4">No Parameters Needed</td></tr>';
      }

      return form_fields_html;
    }

    Livedocs.getParamHtml = function(data) {
      var required = $(data[1]).text().trim().toLowerCase() == "true" || $(data[1]).text().trim().toLowerCase() == "yes";

      var param = {
        name: $(data[0]).text().trim(),
        required: required,
        requirements: $(data[2]).text().trim(),
        description: $(data[3]).text().trim(),
        input_class: required == true ? "required" : ""
      };

      return $.render.form_field_template(param);
    }

    Livedocs.getCredentials = function(){
      if(!$.cookie('username') || !$.cookie('username')) {
        $('#credentialsModal').modal();
      }
    }

    Livedocs.updateCurl = function(livedoc){
      var curl_call = livedoc.find('.curl-call');
      username = $.cookie('username');

      url = livedoc.find('.url').val();
      method = livedoc.find('.method').val().toUpperCase().trim();
      creds = "api_user=" + username + "&api_key=XXXXXXXX";
      format = "." + Livedocs.getResponseFormat();
      var data = buildQueryString(livedoc.find('form'));
      var curl_string = "curl -X " + method + " " + url + format;
      if (method == "GET") {
        curl_string = data ? curl_string + "?" + creds + "&" + decodeURIComponent(data) : curl_string + "?" + creds;
      } else {
        curl_string = data ? curl_string + " -d " + decodeURIComponent(creds + "&" + data).replace(/&/g, " -d ") : curl_string + " -d " + decodeURIComponent(creds).replace(/&/g, " -d ");
      }

      curl_call.find('code').find('.line').html(hljs.highlightAuto(curl_string).value);
      curl_call.find('.gutter').remove();
    }

    Livedocs.toggleLivedoc = function(identifier, show) {
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

    Livedocs.clearResults = function(form) {
      form = $(form);
      form.find('.body').text("");
      form.find('.response-body').addClass('hidden');
      form.find('.response-headers').addClass('hidden');
      form.find('.request-data').addClass('hidden');
      form.find('.response-status').addClass('hidden');
      form.find('.data').text("");
      form.find('.headers').text("");
      form.find('.call').text("");
      form.find('.method').text("");
      form.find('.status').text("");
      form.hide();
    },

    Livedocs.getResponseFormat = function(){
      if ($.cookie('responseFormat')) {
        return $.cookie('responseFormat').toLowerCase();
      }
      return 'json'; // Avoid getting undefined if cookie wasn't set.
    },

    Livedocs.validateRequired = function(form) {
      var valid = true;
      $(form).find('input.required').each(function () {
        if ($(this).val()) {
          $(this).css('border-color','inherit');
          return true;
        }

        $(this).css('border','2px solid red');
        valid = false;
      });

      return valid;
    }

    Livedocs.prettyPrintResponse = function(response, format) {
      if (format == ".json") {
        object = JSON.parse(response);
        response = JSON.stringify(object, null, 2);
      }

      if (format == ".xml") {
        response = formatXml(response);
      }
      return response;
    }

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new Livedocs( this, options ));
      }
    });
  }

})( jQuery, window, document );

$(function () {
  $('#username').val($.cookie('username'));
  $('#password').val($.cookie('password'));

  $('.live-doc').livedocs();
});
