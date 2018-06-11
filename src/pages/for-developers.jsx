import React, { Component } from 'react';
import Link from 'gatsby-link';
import GlossaryPartial from '../components/GlossaryPartial';
import FOR_DEVS_CARDS from '../constants/forDevelopersCards';
import Libaries from '../components/Libaries';
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
        <div className="container for-devs-callouts m-bottom-6">
          <h1 className="page-title">For Developers</h1>
          <div className="row">
            <div className="col-lg-4 col-offset-lg-2 card ta-center">
              <div className="for-devs-callouts__bar" />
              <h2>API</h2>
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
