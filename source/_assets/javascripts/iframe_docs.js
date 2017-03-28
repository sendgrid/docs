

function apidocs_iframe() {
  //if we're on the right page
  if (window.location.pathname == "/docs/API_Reference/api_v3.html") {
    //if we have an actual hash, then replace the iframe with a new one
    var path = window.location.hash;
    if (path) {
      $('#content .iframe-container').html('');
      var url = 'https://sendgrid.api-docs.io/v3.0';
      url += "/"+path.replace("#","");
      $('#content .iframe-container').html('<iframe frameborder="0" src="'+url+'" width="1500" height="1000"></iframe>');
    }
  }
}

$().ready(function() {
  apidocs_iframe();
});
