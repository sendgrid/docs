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
  search_send_ga('send', {
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
        $('div#results').append('<p>No results found in Documentation.</p>\
        <p>Suggestions:</p>\
        <ul>\
        <li>Make sure all keywords are spelled correctly.</li>\
        <li>Try different keywords.</li>\
        <li>Try more general keywords.</li>\
        <li>Try fewer keywords.</li>\
        </ul>');
        $('#docs-tab-badge').text('0');
      } else {
        $('#docs-tab-badge').text(data.matches);
      }

      $.each(data.results, function(index, result) {
        $('div#results').append('<div class="result">\
            <a class="title" href="' + root + result.docid + '"><h3>' + result.title + '</h3></a>\
            <p>' + result.snippet_text + '</p>\
        </div>')
      });
    })

    .fail(function(){
      $('div#results').empty();
      $('div#results').append('<p>Documentation search failed :( Please try again.</p>');
    })

    .always(function(){
      $('#indicator').hide();
    });


    $.ajax({
        url: "https://sendgrid.com/blog/feed/?q=" + query,
        dataType: "xml"
    })
        .done(function (data) {
            var $xml = $(data);
            var items = [];
            var topSize = 10;
            //wp will return all the blog posts, only get 6 of them
            var articles = $xml.find("item").slice(0,topSize);
            if(articles.length == 0) {
              $('div#blog-results').append('<p>No blog posts found.</p>\
              <p>Suggestions:</p>\
              <ul>\
              <li>Make sure all keywords are spelled correctly.</li>\
              <li>Try different keywords.</li>\
              <li>Try more general keywords.</li>\
              <li>Try fewer keywords.</li>\
              </ul>');
              $('#blog-tab-badge').text('O');
            } else {
              $('#blog-tab-badge').text(articles.length);
            }
            $.each(articles, function (i) {
              //only return the topSize results
              if (i === topSize) return false;
              var $this = $(this);
              var blogContent = $this.find("description").text().split(".").slice(0,3).join(".") + ".";

              items.push('<div class="result"><a class="title" href="' + $this.find("link").text() + '"><h3>' +
              $this.find("title").text() + '</h3></a><p>' +
              blogContent + '</p></div>');
            })
            $("#blog-results").html(items.join(''));
          })
        .fail(function(){
            $('div#blog-results').empty();
            $('div#blog-results').append('<p>Blog search failed :( Please try again.</p>');
        })

        .always(function(){
            $('#blog-indicator').hide();
        });
}

function search_send_ga(action, data) {
	if (search_verify_ga()) {
		ga(action, data);
	}
}

function search_verify_ga() {
	if (typeof(ga) == "function") {
		return true
	}
	return false;
}
