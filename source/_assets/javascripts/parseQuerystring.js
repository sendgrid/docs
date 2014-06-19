//based on http://stackoverflow.com/questions/18625933/javascript-or-php-syntax-highlighting-of-query-strings

function parseQuerystring(query){
    var retStr = "";
    parsed = query.split('?');

    if (parsed.length == 1)
      return parseQuerystringNoUrl(query);

    if (parsed.length > 1) {
        parsed[1] = parsed[1].split('&');
        for(i in parsed[1]) {
            parsed[1][i] = parsed[1][i].split('=');
        }
        retStr = '<span class="path">' + parsed[0] + '</span>';
    } 
    
    if (parsed.length > 1) {
        retStr += '?';
        first = true;
        for(i in parsed[1]) {
            if (first) {
                first = false;
            } else {
                retStr += '&';
            }
            retStr += '<span class="data-key">' + parsed[1][i][0] + '</span>';
            if (parsed[1][i].length > 1) {
                retStr += '=' +
                '<span class="data-value">' + parsed[1][i][1] + '</span>';
            }
            if (parsed[1][i].length > 2) {
                for (var j = 2; j < parsed[1][i].length; j++) {
                      retStr += '=';
                      retStr += '<span class="error">' + parsed[1][i][j] + '</span>';
                }
            }
        }
    }
    if (parsed.length > 2) {
        for (var i = 2; i < parsed.length; i++) {
              retStr += '?';
              retStr += '<span class="error">' + parsed[i] + '</span>';
        }
    }
    return retStr;
}

function parseQuerystringNoUrl(query){
    var retStr = "";
    parsed = query.split('&');

    first = true;
 
    for(i in parsed) {
        if (first) {
            first = false;
        } else {
            retStr += '&';
        }

        kv = parsed[i].split('=');

        retStr += '<span class="data-key">' + kv[0] + '</span>';
        if (parsed[i].length > 1) {
            retStr += '=' +
            '<span class="data-value">' + kv[1] + '</span>';
        }
    }

    return retStr;
}
