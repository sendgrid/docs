import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Search from '../components/Search';
import FooterCallout from '../components/FooterCallout';
import config from '../../data/SiteConfig';
import HOME_CARDS from '../constants/homeCards';
import CALLOUTS from '../constants/homeCallouts';
import magnifyImageHome from '../img/help-center-magnify.svg';
import './index.scss';

class Index extends React.Component {
  static renderCards() {
    return HOME_CARDS.map(card => (
      <div className="card card--home col-md-6 ta-center" key={card.TITLE}>
        <img className="card-icon" src={card.ICON} alt={card.TITLE} />
        <h3 className="card__title" >{card.TITLE}</h3>
        {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL} className="card__link">{link.TEXTNODE}</Link>)}
        <Link className="btn center" to={card.BUTTON_LINK}>View All</Link>
      </div>
    ));
  }

  static renderCallouts() {
    return CALLOUTS.map((card) => {
      const cardClass = `card home-callout col-md-4 callout--${card.BADGE}`;
      return (
        <div className={cardClass} key={card.TITLE}>
          <div className="home-callout__badge">
            {card.BADGE}
          </div>
          <h3 className="card__title is-size-h2 m-bottom-2">{card.TITLE}</h3>
          <div className="is-p">{card.COPY}</div>
          <Link to={card.LINK} className="btn btn-primary center">Get Started</Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="docs-home">
        <SEO postNode={this.props} title={config.siteTitle} description="SendGrid documentation home" />
        <div className="search-hero ta-center color-white">
          <div className="container">
            <div className="search-hero__bg">
              <h1 className="page-title">Knowledge Center</h1>
              <Search />
            </div>
          </div>
        </div>
        <div className="home-callouts">
          <div className="container-lg">
            <div className="row row--home-cards">
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
              <div className="row">
                <div className="col-md-12">
                  <h2>Glossary</h2>
                  <p className="ta-center">Not sure what something means? Find terms from our library sorted A-Z.</p>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="card card--glossary is-thin">
                        <h3 className="card__title">Featured Terms</h3>
                        <Link className="glossary-link" to="/">lorem ipsum</Link>
                        <Link className="glossary-link" to="/">lorem ipsum</Link>
                        <Link className="glossary-link" to="/">lorem ipsum</Link>
                        <Link className="btn btn-primary" to="/">View All</Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img className="glossary-icon" src={magnifyImageHome} alt="SendGrid Glossary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterCallout />
      </div>
    );
  }
}

export default Index;
