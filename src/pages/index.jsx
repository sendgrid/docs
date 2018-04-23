import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Search from '../components/Search';
import config from '../../data/SiteConfig';
import getStarted from '../img/get-started.svg';
import HOME_CARDS from '../constants/homeCards';
import './index.scss';

class Index extends React.Component {
  static renderCards() {
    return HOME_CARDS.map(card => (
      <div className="card card--home col-md-6 ta-center" key={card.TITLE}>
        {card.TITLE}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="search-hero ta-center color-white">
          <div className="container">
            <Helmet title={config.siteTitle} />
            <h1 className="page-title color-white">Get Help Using SendGrid</h1>
            <Search />
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="card card--no-pad">
              <div className="row">
                <div className="col-md-6" >
                  <img src={getStarted} alt="Get Started" />
                </div>
                <div className="col-md-6 get-started">
                  <h2>Get Started</h2>
                  <p>Start sending on the right foot. We’ll walk you through the steps needed to be an effective email sender. Choose between:</p>
                  <Link to="/" className="btn btn-secondary">Marketing Campains</Link>
                  <Link to="/" className="btn btn-secondary">API &amp; SMTP</Link>
                </div>
              </div>
            </div>
            <div className="row row--home-cards">
              {Index.renderCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
