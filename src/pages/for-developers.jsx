import React, { Component } from 'react';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import FOR_DEVS_CARDS from '../constants/forDevelopersCards';
import Libaries from '../components/Libaries';
import withSubNav from '../components/NavSub';
import magnifyImageDevs from '../img/help-center-magnify-devs.svg';
import './for-developers.scss';

class ForDevelopers extends Component {
  static renderFeaturedCards() {
    return FOR_DEVS_CARDS.map(card => (
      <div className="card card--home col-md-6 ta-center" key={card.TITLE}>
        <img className="card-icon" src={card.ICON} alt={card.TITLE} />
        <h3 className="card__title" >{card.TITLE}</h3>
        {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL} className="card__link">{link.TEXTNODE}</Link>)}
        <Link className="btn center" to={card.BUTTON_LINK}>View All</Link>
      </div>
    ));
  }

  render() {
    return (
      <div className="for-developers">
        <SEO postNode={this.props} title="For Developers" description="SendGrid API and Marketing Campaigns documentation for Developers" />
        <div className="container for-devs-callouts m-bottom-6">
          <h1 className="page-title">For Developers</h1>
          <div className="row row--home-cards">
            <div className="col-lg-4 col-offset-lg-2 card ta-center">
              <div className="for-devs-callouts__bar" />
              <h2>API Reference</h2>
              <Link to="/" className="btn btn-primary center">Visit API reference</Link>
            </div>
            <div className="col-lg-4 card ta-center">
              <div className="for-devs-callouts__bar" />
              <h2>Get Started</h2>
              <div className="row for-devs-callouts__get-started-btns">
                <Link to="/" className="btn btn-primary col-sm-6">Use API</Link>
                <Link to="/" className="btn btn-primary col-sm-6">Use SMTP</Link>
              </div>
            </div>
          </div>
        </div>
        <Libaries />
        <div className="for-devs-featured container">
          <h2>Featured Resources</h2>
          <div className="row row--home-cards">
            {ForDevelopers.renderFeaturedCards()}
          </div>
        </div>
        <div className="for-devs-glossary">
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
                      <img className="glossary-icon" src={magnifyImageDevs} alt="SendGrid Glossary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withSubNav({ showBreadCrumbs: true })(ForDevelopers);
