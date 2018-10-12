import React from 'react';
import _ from 'lodash';
import STARWARS from '../../constants/starWars';
import './search.scss';

class Search extends React.Component {
  componentDidMount() {
    const container = document.querySelector('.search-hero') || false;
    const prefix = process.env.NODE_ENV === 'development' ? '' : '/docs';
    window.docsearch({
      apiKey: '621c583d8098d07c471dbaf6c2178e56',
      indexName: 'sendgrid_hc',
      inputSelector: '.search-query',
      debug: false, // Set debug to true if you want to inspect the dropdown
      queryHook(query) {
        if (!container) {
          return;
        }
        const starKeys = Object.keys(STARWARS);
        const matches = starKeys.filter(val => _.includes(query, val));
        if (matches.length) {
          const gif = STARWARS[matches[0]];
          container.classList.add('star-wars');
          container.style.backgroundImage = `url('${prefix}${gif}')`;
        } else {
          container.classList.remove('star-wars');
          container.style = 'none';
        }
      },
      transformData(hits) {
        const updatedUrlHits = hits.map(((hit) => {
          hit.url = hit.url.replace('#___gatsby', '');
          if (hit.anchor === '___gatsby') {
            hit.anchor = '';
          }
          return hit;
        }));
        // modify hits
        return updatedUrlHits;
      },
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
