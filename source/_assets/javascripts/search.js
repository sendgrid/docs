//if we load the page and there's a query specified (from the header search input), execute that query immediately
$(document).ready(function() {
	q = $.jStorage.get('search_query');
   	if($('#search').length) {
		if (q!=""){
			$('input#page-query').val(q);
			$('.bar-indicator').show();
			search($('input#page-query').val());
		}
	  $('form#search').submit(function() {
			$('.bar-indicator').show();
       	search($('input#page-query').val());
     		return false;
		});
	} 
	
	$('form.navbar-search').submit(function() {
    query = $('input#query').val();
    $.jStorage.set('search_query', query);
    
    //this is kinda hacky but let's infer the root from the home button
    var root = $('.nav-link > a')[0].href.replace('/index.html','');
    
    document.location.href = root + "/search.html";
    return false;
	});
});

function search(query) {
  var relativeRoot = $('.nav-link > a')[0].pathname.replace('/index.html','');
  var simulatedSearchUrl = relativeRoot + '/search.html?q=' + encodeURIComponent(query);
  ga('send', {
    'hitType': 'pageview',
    'page': simulatedSearchUrl,
    'title': 'Search: ' + query
  });
 
  $('.circle-indicator').show();

  var result = $.getJSON('https://86xw1.api.searchify.com/v1/indexes/docs/search?q=' + encodeURIComponent(query) + '&fetch=title&snippet=text&len=500&callback=?')
    .done(function(data){
      $('div#results').empty();

      root = $('#root').val();
      last_char = root.substr(root.length - 1);
      if (last_char == "/")
        root = root.slice(0, -1);
      
      if(data.matches == 0) {
        $('div#results').append('<h2>No Documentation Results Found</h2>');
        $('#docs-tab-badge').text('0');
      } else {
        $('#docs-tab-badge').text(data.matches);
      }
    
      $.each(data.results, function(index, result) {
        $('div#results').append('<div class="result">\
            <p><a class="title" href="' + root + result.docid + '">' + result.title + '</a><br/>\
        <a href="' + root + result.docid + '"\><small>' + root + result.docid + '</small></a><br/>\
            ' + result.snippet_text + '</p>\
        <br/></div>')
      });
    })

    .fail(function(){
      $('div#results').empty();
      $('div#results').append('<h2><div class="alert alert-danger">Documentation Search Failed! Please try again.</div></h2>');
    })
    
    .always(function(){
      $('#indicator').hide();
    });


  var token = "222d9f6a86c97a5fe1d024dd258a2fc919fe7cc847900751bed9d64ce333510e";
  var kb_result = 
    $.ajax({
      url: 'https://sendgrid.zendesk.com/api/v2/help_center/articles/search.json?query=' + encodeURIComponent(query),
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .done(function(data){
      $('div#kb-results').empty();
     
      data = $.grep(data.results, function(result){ return result.section_id!='200050018' } );

      if(data.length == 0) {
        $('div#kb-results').append('<h2>No Knowledge Base Results Found</h2>');
        $('#kb-tab-badge').text('0');
      } else {
        $('#kb-tab-badge').text(data.length);
      }
    
      $.each(data, function(index, result) {
        first_occurrence = $(result.body).text().toLowerCase().indexOf(query);
        before_chars = (500-(query.length))/2;
        start = first_occurrence - before_chars;
        if (start < 0) {
          start = 0;
        }
        end = start + (before_chars*2);
        excerpt = $(result.body).text().substring(start, end).replace(query,'<strong>' + query + '</strong>');

        $('div#kb-results').append('<div class="result">\
            <p><a class="title" href="' + result.html_url + '">' + result.title + '</a><br/>\
        <a href="' + result.html_url + '"\><small>' + result.html_url + '</small></a><br/>\
            ' + excerpt + '</p>\
        <br/></div>')
      });
    })

    $.ajax({
      url: "https://sendgrid.com/blog/?q=" + query,
      dataType: "xml",
      success: function (data) {
        var $xml = $(data);
        var items = [];

        var articles = $xml.find("item");
        if(articles.length == 0) {
          $('div#blog-results').append('<h2>No Blog Found</h2>');
          $('#blog-tab-badge').text('0');
        } else {
          $('#blog-tab-badge').text(articles.length);
        }
        $.each(articles, function (i) {
          if (i === 5) return false;
          var $this = $(this);
          items.push('<div class="result"><p><a class="title" href="' + $this.find("link").text() + '">' +
          $this.find("title").text() + '</a><br/><a href="' +
          $this.find("link").text() + '"\><small>' + $this.find("link").text() + '</small></a><br/>' +
          $this.find("description").text() + '</p><br/></div>');
        })
        $("#blog-results").html(items.join(''));
      }
    })

    .fail(function(){
      $('div#kb-results').empty();
      $('div#kb-results').append('<h2><div class="alert alert-danger">Knowledge Base Search Failed! Please try again.</div></h2>');
    })
    
    .always(function(){
      $('#kb-indicator').hide();
    });
}
