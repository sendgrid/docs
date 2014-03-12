//just a quick example, in no way pretty code.
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
	
	$('form#header-search').submit(function() {
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
  	//_gaq.push(['_set','page',simulatedSearchUrl]);
  	
    var result = $.getJSON('http://agupam.api.indexden.com/v1/indexes/docs/search?q=' + encodeURIComponent(query) + '&fetch=title&snippet=text&len=500&callback=?', function(data) {
        $('div#results').empty();
		
		root = $('#root').val().slice(0, -1);
		
		if(data.matches == 0) {
			$('div#results').append('<h2>No Results Found</h2>');
		} else {
			$('div#results').append('<h2><span class="badge">' + data.matches + '</span> Results Found</h2><hr/>');
		}
		
		$('.bar-indicator').hide();
		
    	$.each(data.results, function(index, result) {
        $('div#results').append('<div class="result">\
      			<p><a class="title" href="' + root + result.docid + '">' + result.title + '</a><br/>\
				<a href="' + root + result.docid + '"\><small>' + root + result.docid + '</small></a><br/>\
      			' + result.snippet_text + '</p>\
    		<br/></div>')
    	});
    });
  }
