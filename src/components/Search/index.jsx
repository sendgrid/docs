import React from 'react';
import './search.scss';

class Search extends React.Component {
  static swiftype() {
    /* eslint-disable */
    (function (w, d, t, u, n, s, e) {
      w.SwiftypeObject = n; w[n] = w[n] || function () {
        (w[n].q = w[n].q || []).push(arguments);
      };
      s = d.createElement(t);
      e = d.getElementsByTagName(t)[0];
      s.async = 1;
      s.src = u;
      e.parentNode.insertBefore(s, e);
    }(window, document, 'script', '//s.swiftypecdn.com/install/v2/st.js', '_st'));

    _st('install', 'NC4TVEWaL6p6zBLuL7eo', '2.0.0');
    /* eslint-enable */
  }

  render() {
    return (
      <div className="search-docs">
        <form>
          <div className="input-text-wrap is-search">
            <input type="text" id="query" placeholder="Search..." className="form-control search-hero__query search-query st-default-search-input" name="q" />
            <input type="button" value="Search" className="input-btn" />
          </div>
        </form>
        {Search.swiftype()}
      </div>
    );
  }
}

export default Search;
