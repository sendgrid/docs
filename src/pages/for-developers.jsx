import React, { Component } from 'react';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import { GLOSSARY_TERMS_DEVS } from '../constants/glossaryTerms';
import GlossaryPartial from '../components/GlossaryPartial/glossaryPartial';
import FOR_DEVS_CARDS from '../constants/forDevelopersCards';
import Libaries from '../components/Libaries';
import withSubNav from '../components/NavSub';
import './for-developers.scss';

class ForDevelopers extends Component {
  static renderFeaturedCards() {
    return FOR_DEVS_CARDS.map(card => (
      <div className="card card--home col-md-6 ta-center" key={card.TITLE}>
        <div className="card__inner">
          <img className="card-icon" src={card.ICON} alt={card.TITLE} />
          <h3 className="card__title" >{card.TITLE}</h3>
          {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL} className="card__link">{link.TEXTNODE}</Link>)}
        </div>
        <div className="card__button">
          <Link className="btn center" to={card.BUTTON_LINK}>View All</Link>
        </div>
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
            <div className="col-md-4 col-offset-md-2 col-lg-4 col-offset-lg-2 card ta-center">
              <div className="for-devs-callouts__bar" />
              <h2>API Reference</h2>
              <Link to="/api-reference/" className="btn btn-primary center">Visit API reference</Link>
            </div>
            <div className="col-lg-4 card ta-center">
              <div className="for-devs-callouts__bar" />
              <h2>Get Started</h2>
              <div className="row for-devs-callouts__get-started-btns">
                <Link to="/for-developers/sending-email/api-getting-started/" className="btn btn-primary col-sm-6">API</Link>
                <Link to="/for-developers/sending-email/getting-started-smtp/" className="btn btn-primary col-sm-6">SMTP</Link>
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
          <GlossaryPartial data={GLOSSARY_TERMS_DEVS} />
        </div>
      </div>
    );
  }
}

export default withSubNav({ showBreadCrumbs: true })(ForDevelopers);
