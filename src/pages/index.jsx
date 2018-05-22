import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Search from '../components/Search';
import config from '../../data/SiteConfig';
import HOME_CARDS from '../constants/homeCards';
import CALLOUTS from '../constants/homeCallouts';
import './index.scss';

class Index extends React.Component {
  static renderCards() {
    return HOME_CARDS.map(card => (
      <div className="card card--home col-md-6 ta-center" key={card.TITLE}>
        <h3>{card.TITLE}</h3>
        {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL} className="card__link">{link.TEXTNODE}</Link>)}
      </div>
    ));
  }

  static renderCallouts() {
    return CALLOUTS.map(card => (
      <div className="card home-callout col-md-4" key={card.TITLE}>
        <div className="home-callout__badge">
          {card.BADGE}
        </div>
        <h2>{card.TITLE}</h2>
        <p>{card.COPY}</p>
        <Link to={card.LINK} className="btn">Get Started</Link>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="search-hero ta-center color-white">
          <div className="container">
            <div className="search-hero__bg">
              <Helmet title={config.siteTitle} />
              <h1 className="page-title color-white">Help Center</h1>
              <Search />
            </div>
          </div>
        </div>
        <div className="home-callouts">
          <div className="container-lg">
            <div className="row">
              {Index.renderCallouts()}
            </div>
          </div>
        </div>
        <div className="main">
          <div className="home-featured">
            <div className="container">
              <h2>Featured Resources</h2>
              <div className="row row--home-cards">
                {Index.renderCards()}
              </div>
            </div>
          </div>
          <div className="home-glossary">
            <div className="container home-glossary__container">
              <h2>Glossary</h2>
              <p>Not sure what something means? Find terms from our library sorted A-Z.</p>
              <div className="row">
                <div className="col-md-7">
                  <div className="card">
                    <h3>Featured Terms</h3>
                    <Link className="glossary-link" to="/">lorem ipsum</Link>
                    <Link className="glossary-link" to="/">lorem ipsum</Link>
                    <Link className="glossary-link" to="/">lorem ipsum</Link>
                    <Link className="btn" to="/">View All</Link>
                  </div>
                </div>
                <div className="col-md-4">
                  icon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
