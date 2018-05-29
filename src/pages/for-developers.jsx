import React, { Component } from 'react';
import Link from 'gatsby-link';
import GlossaryPartial from '../components/GlossaryPartial';
import FOR_DEVS_CARDS from '../constants/forDevelopersCards';
import './for-developers.scss';

class ForDevelopers extends Component {
  static renderFeaturedCards() {
    return FOR_DEVS_CARDS.map(card => (
      <div className="card card--home col-md-6 ta-center" key={card.TITLE}>
        <h3 className="card__title" >{card.TITLE}</h3>
        {card.LINKS.map(link => <Link key={link.TEXTNODE} to={link.URL} className="card__link">{link.TEXTNODE}</Link>)}
        <Link className="btn center" to={card.BUTTON_LINK}>View All</Link>
      </div>
    ));
  }

  render() {
    return (
      <div className="for-developers">
        <div className="container for-devs-callouts">
          <div className="row">
            <div className="col-lg-4 col-offset-lg-2 card">API</div>
            <div className="col-lg-4 card">Get Started</div>
          </div>
        </div>
        <div className="libraries container">
          <div className="card">
            <h2>Open Source Libraries</h2>
            <div className="is-p">Prebuilt libraries and sample code for popular languages.</div>
          </div>
        </div>
        <div className="for-devs-featured container">
          <h2>Featured Resources</h2>
          <div className="row">
            {ForDevelopers.renderFeaturedCards()}
          </div>
        </div>
        <div className="for-devs-glossary">
          <GlossaryPartial />
        </div>
      </div>
    );
  }
}

export default ForDevelopers;
