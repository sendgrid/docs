

function apidocs_iframe() {
  if (window.location.pathname == "/docs/API_Reference/api_v3.html") {
    var url = 'https://sendgrid.api-docs.io/v3.0';
    var path = window.location.hash;
    if (path) {
      url += "/"+path.replace("#","");
    }
    $('#content .iframe-container').html('<iframe frameborder="0" src="'+url+'" width="1500" height="1000"></iframe>');
  }
}

$().ready(function() {
  apidocs_iframe();
});
