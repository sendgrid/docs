import React from 'react';
import './search.scss';

class Search extends React.Component {
  componentDidMount() {
    window.docsearch({
      apiKey: '621c583d8098d07c471dbaf6c2178e56',
      indexName: 'sendgrid_hc',
      inputSelector: '.search-query',
      debug: true, // Set debug to true if you want to inspect the dropdown
    });
  }

  render() {
    return (
      <div className="search-docs">
        <form>
          <div className="input-text-wrap is-search">
            <input type="text" id="query" placeholder="What are you looking for?" autoComplete="off" className="form-control search-hero__query search-query st-default-search-input" name="q" />
            <input type="button" value="Search" className="input-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
