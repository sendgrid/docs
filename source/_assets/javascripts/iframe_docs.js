

function apidocs_iframe() {
  //if we're on the right page
  if (window.location.pathname == "/docs/API_Reference/api_v3.html" || window.location.pathname == "/API_Reference/api_v3.html" ) {
    //if we have an actual hash, then replace the iframe with a new one
    var path = window.location.hash;
    $('#content .iframe-container').html('');

    var url = 'https://sendgrid.api-docs.io/v3.0';

    if (path) {
      url += "/"+path.replace("#","");
    }

    $('#content .iframe-container').html($('<iframe frameborder="0" width="1500" height="1000"></iframe>').attr('src', url));
  }
}

$().ready(function() {
  apidocs_iframe();
});
